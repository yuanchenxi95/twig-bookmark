import { Document } from 'mongoose';

import { BaseDto } from './Base.dto';

export interface StarDto extends BaseDto, Document {
    id: string;

    username: string;

    tags: [string];

    url: string;

    hostname: string;

    createdAt: string;

    updatedAt: string;
}

export class StarOutputDto implements BaseDto {
    public readonly id: string;

    public readonly username: string;

    public readonly tags: [string];

    public readonly url: string;

    public readonly hostname: string;

    public readonly createdAt: string;

    public readonly updatedAt: string;

    constructor(
        starDto: StarDto,
    ) {
        const {
            id, username, tags, url, hostname, createdAt, updatedAt,
        } = starDto;
        this.id = id;
        this.username = username;
        this.tags = tags;
        this.url = url;
        this.hostname = hostname;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
