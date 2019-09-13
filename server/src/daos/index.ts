import { UserDao } from './User.dao';
import { StarDao } from './Star.dao';
import { UserModel, StarModel } from '../models';

export const userDao = new UserDao(UserModel);
export * from './User.dao';

export const starDao = new StarDao(StarModel);
export * from './Star.dao';
