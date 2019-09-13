import { Document } from 'mongoose';

import { BaseDto } from './Base.dto';

export interface UserDto extends BaseDto, Document {
    id: string;

    username: string;

    name: string;

    salt: string;

    password: string;

    createdAt: string;

    updatedAt: string;
}


export class UserOutputDto implements BaseDto {
    public id: string;

    public username: string;

    public name: string;

    public createdAt: string;

    constructor(userDto: UserDto) {
        this.id = userDto.id;
        this.username = userDto.username;
        this.name = userDto.name;
        this.createdAt = userDto.createdAt;
    }
}
