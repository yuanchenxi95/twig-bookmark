import { BaseService } from './Base.service';
// import { UserDto } from '../dtos/User.dto';
// import { AuthorizationException } from '../exceptions/AuthorizationException';
// import { AUTHORIZATION_DO_NOT_HAVE_PERMISSION_ERROR } from '../constants/errors';
import { UserDao } from '../daos/User.dao';

export class AuthorizationService extends BaseService {
    constructor(private readonly userDao: UserDao) {
        super();
    }

}
