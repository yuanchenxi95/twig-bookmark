import { BaseDto } from '../../dtos/Base.dto';

export interface LoginInputDto extends BaseDto {
    username: string;

    password: string;
}

export interface UserInputDto extends BaseDto {
    username: string;

    name: string;

    password: string;
}

export interface UserPasswordInputDto extends BaseDto {
    password: string;
}
