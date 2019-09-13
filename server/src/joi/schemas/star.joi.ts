import Joi from '@hapi/joi';

const url: Joi.Schema = Joi.string().uri({
    scheme: [
        /https?/,
    ],
});

// tag: length [1,20]
const tag: Joi.Schema = Joi.string().min(1).max(20);

const tags: Joi.Schema = Joi.array()
    .items(
        tag,
    )
    // max array size 30
    .max(30)
    // should not have duplicate tag
    .unique()
    .default([]);

export const createStarJoiSchema: Joi.Schema = Joi.object().keys({
    url,
    tags,
});
