import mongoose from 'mongoose';
import { BaseDao } from './Base.dao';
import { UserDto } from '../dtos/User.dto';

export class UserDao extends BaseDao<UserDto> {
    constructor(mongooseModel: mongoose.Model<UserDto>) {
        super(mongooseModel);
    }
}
