import { Request } from 'express';

import { BaseController } from './Base.controller';

import {
    UserService, AuthorizationService, AuthenticationService,
} from '../services/index';

import { UserOutputDto } from '../dtos/User.dto';
import { joiRequestValidation } from '../joi';
import { changePasswordJoiSchema, createUserJoiSchema } from '../joi/schemas/user.joi';

import { UserInputDto, UserPasswordInputDto } from '../types/input/user.dto';

export class UserController extends BaseController {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly authorizationService: AuthorizationService,
        private readonly userService: UserService,
    ) {
        super();
    }

    async createUser(req: Request): Promise<UserOutputDto> {
        const value = joiRequestValidation<UserInputDto>(createUserJoiSchema, req.body);

        const newUser = await this.userService.createUser(value);
        return newUser;
    }

    async changePassword(req: Request): Promise<UserOutputDto> {
        const { username } = this.authenticationService.decodeUserJWTFromRequest(req);
        // await this.authorizationService.assertAdminAuthorization(userId);

        const value = joiRequestValidation<UserPasswordInputDto>(changePasswordJoiSchema, req.body);

        const updatedUser = await this.userService.changePassword(username, value);
        return updatedUser;
    }
}
