import { BaseDto } from '../../dtos/Base.dto';

export interface JWTOutputDto extends BaseDto {
    jwt: string;
}
