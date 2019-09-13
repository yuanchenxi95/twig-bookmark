import { BaseDto } from '../../dtos/Base.dto';

export interface CreateStarInputDto extends BaseDto {
    url: string;

    tags: [string];
}
