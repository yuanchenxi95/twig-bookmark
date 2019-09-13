import { BaseService } from './Base.service';
import { StarDao } from '../daos';
import { CreateStarInputDto } from '../types/input/star.dto';
import { StarOutputDto } from '../dtos/Star.dto';
import { parseURL } from '../utils/url';

export class StarService extends BaseService {
    constructor(private readonly starDao: StarDao) {
        super();
    }

    async createStar(username: string, createStarInputDto: CreateStarInputDto): Promise<StarOutputDto> {
        const { url, tags } = createStarInputDto;

        const parsedUrl = parseURL(url);

        const newStar = await this.starDao.create({
            username,
            url,
            tags,
            hostname: parsedUrl.hostname,
        });

        return new StarOutputDto(newStar);
    }
}
