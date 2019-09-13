import Joi from '@hapi/joi';

const username: Joi.Schema = Joi.string().min(3).max(20).alphanum()
    .required();

const name: Joi.Schema = Joi.string().min(3).max(30);

const password: Joi.Schema = Joi.string().min(8).max(50);

export const createUserJoiSchema: Joi.Schema = Joi.object().keys({
    username,
    name,
    password,
});

export const changePasswordJoiSchema: Joi.Schema = Joi.object().keys({
    password,
});

export const loginJoiSchema: Joi.Schema = Joi.object().keys({
    username,
    password,
});
