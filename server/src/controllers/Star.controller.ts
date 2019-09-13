import { Request } from 'express';

import { BaseController } from './Base.controller';

import { AuthenticationService, StarService } from '../services/index';

import { joiRequestValidation } from '../joi';
import { StarOutputDto } from '../dtos/Star.dto';
import { CreateStarInputDto } from '../types/input/star.dto';
import { createStarJoiSchema } from '../joi/schemas/star.joi';

export class StarController extends BaseController {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly starService: StarService,
    ) {
        super();
    }

    async createStar(req: Request): Promise<StarOutputDto> {
        const { username } = this.authenticationService.decodeUserJWTFromRequest(req);

        const value = joiRequestValidation<CreateStarInputDto>(createStarJoiSchema, req.body);

        const newUser = await this.starService.createStar(username, value);
        return newUser;
    }
}
