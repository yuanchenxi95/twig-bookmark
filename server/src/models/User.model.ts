import mongoose from 'mongoose';
import { UserDto } from '../dtos/User.dto';

const UserSchemaString = 'User';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const UserModel = mongoose.model<UserDto>(UserSchemaString, UserSchema);

export {
    UserSchemaString,
    UserSchema,
    UserModel,
};
