import { isNil } from 'lodash';

import { BaseService } from './Base.service';
import { UserOutputDto } from '../dtos/User.dto';
import { UserDao } from '../daos/User.dao';
import { UserInputDto, UserPasswordInputDto } from '../types/input/user.dto';
import { ServiceException } from '../exceptions/ServiceException';
import { USER_ALREADY_EXIST_ERROR } from '../constants/errors';
import { generateSalt, hashPassword } from '../utils/password';
// import { AuthorizationException } from '../exceptions/AuthorizationException';
// import { AUTHORIZATION_DO_NOT_HAVE_PERMISSION_ERROR } from '../constants/errors';

export class UserService extends BaseService {
    constructor(private readonly userDao: UserDao) {
        super();
    }

    async createUser(userInputDto: UserInputDto): Promise<UserOutputDto> {
        const {
            username,
            name,
            password,
        } = userInputDto;

        const user = await this.userDao.findOne({ username });

        if (!isNil(user)) {
            throw new ServiceException(`user: ${username} already exist`, USER_ALREADY_EXIST_ERROR);
        }

        const salt = generateSalt();

        const hashedPassword = hashPassword(password, salt);

        const newUserDocument = await this.userDao.create({
            username,
            name,
            password: hashedPassword,
            salt,
        });

        const userOutputDto = new UserOutputDto(newUserDocument);

        return userOutputDto;
    }

    async changePassword(username: string, userPasswordInputDto: UserPasswordInputDto): Promise<UserOutputDto> {
        const {
            password,
        } = userPasswordInputDto;
        const salt = generateSalt();
        const hashedPassword = hashPassword(password, salt);

        const userDocument = await this.userDao.updateOne({
            username,
        }, {
            password: hashedPassword,
            salt,
        });

        const userOutputDto = new UserOutputDto(userDocument);

        return userOutputDto;
    }
}
