import mongoose from 'mongoose';
import { BaseDao } from './Base.dao';
import { StarDto } from '../dtos/Star.dto';

export class StarDao extends BaseDao<StarDto> {
    constructor(mongooseModel: mongoose.Model<StarDto>) {
        super(mongooseModel);
    }
}
