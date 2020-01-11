import { isNil, isString } from 'lodash';
import { Request } from 'express';

import { BaseService } from './Base.service';
import {
    INCORRECT_PASSWORD,
    JWT_INVALID_TOKEN,
    JWT_TOKEN_EXPIRED,
    JWT_TOKEN_MISSING,
    USER_ID_DOES_NOT_MATCH,
    USER_NOT_FOUND,
} from '../constants/errors';
import { hashPassword } from '../utils/password';
import { ServiceException } from '../exceptions/ServiceException';
import {
    decodeJWT, generateJWT, UserJWTPayload,
} from '../utils/jwt';
import { JWTOutputDto } from '../types/output/authentication.dto';
import { X_ACCESS_TOKEN } from '../constants/headers';
import { UserDao } from '../daos';

export class AuthenticationService extends BaseService {
    constructor(private readonly userDao: UserDao) {
        super();
    }

    async login(username: string, password: string): Promise<JWTOutputDto> {
        const user = await this.userDao.findOne({ username });

        if (isNil(user)) {
            throw new ServiceException(`Cannot find the user: ${username}`, USER_NOT_FOUND);
        }

        const hashedPassword = hashPassword(password, user.salt);
        if (hashedPassword !== user.password) {
            throw new ServiceException(`Incorrect password for ${username}`, INCORRECT_PASSWORD);
        }

        const jwt = generateJWT({ username: user.username });
        return { jwt };
    }


    verifyMe(userId: string, userJWTPayload: UserJWTPayload): void {
        if (userId !== userJWTPayload.username) {
            const errorMessage = `User Id ${userId} does not match the token User Id ${userJWTPayload.username}`;
            throw new ServiceException(errorMessage, USER_ID_DOES_NOT_MATCH);
        }
    }

    getUserJWTPayload(token: string): UserJWTPayload {
        let userJWTPayload;
        try {
            userJWTPayload = decodeJWT(token);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new ServiceException(`Token ${token} Expired`, JWT_TOKEN_EXPIRED);
            } else {
                throw new ServiceException(`Invalid Token ${token}`, JWT_INVALID_TOKEN);
            }
        }
        return userJWTPayload;
    }

    decodeUserJWTFromRequest(req: Request): UserJWTPayload {
        const xAccessToken = req.headers[X_ACCESS_TOKEN] as string;
        if (!isString(xAccessToken)) {
            throw new ServiceException('JWT Token Missing', JWT_TOKEN_MISSING);
        }
        return this.getUserJWTPayload(xAccessToken);
    }
}
