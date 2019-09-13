import { Request } from 'express';
import { isNil } from 'lodash';

import { BaseController } from './Base.controller';
import { UserInputDto } from '../types/input/user.dto';
import { createJoiResponseError, joiValidate } from '../joi';
import { loginJoiSchema } from '../joi/schemas/user.joi';
import { ValidationException } from '../exceptions/ValidationException';
import { JWTOutputDto } from '../types/output/authentication.dto';
import { AuthenticationService } from '../services/index';

export class AuthenticationController extends BaseController {
    constructor(
        private readonly authenticationService: AuthenticationService,
    ) {
        super();
    }

    async login(req: Request): Promise<JWTOutputDto> {
        const validationResult = joiValidate<UserInputDto>(loginJoiSchema, req.body);

        const { error, value } = validationResult;

        if (!isNil(error)) {
            const joiResponseError = createJoiResponseError(error);
            throw new ValidationException('createUser invalid input', joiResponseError);
        }

        const {
            username,
            password,
        } = value;

        const jwtOutputDto = await this.authenticationService.login(username, password);
        return jwtOutputDto;
    }
}
