import { AuthenticationService } from './Authentication.service';
import { AuthorizationService } from './Authorization.service';
import { UserService } from './User.service';
import { StarService } from './Star.service';

import { userDao, starDao } from '../daos';


const authenticationService = new AuthenticationService(userDao);
const authorizationService = new AuthorizationService(userDao);
const userService = new UserService(userDao);
const starService = new StarService(starDao);

export {
    authenticationService,
    authorizationService,
    userService,
    starService,
};

export * from './Authentication.service';
export * from './Authorization.service';
export * from './User.service';
export * from './Star.service';
