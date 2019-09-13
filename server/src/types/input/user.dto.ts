import { BaseDto } from '../../dtos/Base.dto';

export interface UserInputDto extends BaseDto {
    username: string;

    name: string;

    password: string;

}

export interface UserPasswordInputDto extends BaseDto {
    password: string;
}
