import mongoose from 'mongoose';
import { StarDto } from '../dtos/Star.dto';

const StarSchemaString = 'Star';

const StarSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true,
    },
    tags: {
        type: [String],
        required: true,
        index: true,
    },
    url: {
        type: String,
        required: true,
        index: true,
    },
    hostname: {
        type: String,
        required: true,
        index: true,
    },
}, { timestamps: true });

const StarModel = mongoose.model<StarDto>(StarSchemaString, StarSchema);

export {
    StarSchemaString,
    StarSchema,
    StarModel,
};
