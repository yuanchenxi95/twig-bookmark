import {
    authenticationService,
    authorizationService,
    userService,
    starService,
} from '../services/index';
import { AuthenticationController } from './Authentication.controller';
import { UserController } from './User.controller';
import { StarController } from './Star.controller';

const authenticationController = new AuthenticationController(authenticationService);
const userController = new UserController(authenticationService, authorizationService, userService);
const starController = new StarController(authenticationService, starService);

export {
    authenticationController,
    userController,
    starController,
};
export * from './User.controller';
