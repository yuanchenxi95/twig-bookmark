import Joi, { ValidationOptions, ValidationResult } from '@hapi/joi';
import { isNil } from 'lodash';
import { ResponseError } from '../types/classes/ResponseError';
import { JOI_VALIDATION_ERROR } from '../constants/errors/index';
import { ValidationException } from '../exceptions/ValidationException';

const JOI_OPTIONS: ValidationOptions = {
    abortEarly: false, // returns all the errors found
    allowUnknown: false, // does not allow object to contain unknown keys which are ignored
    presence: 'required',
};

export function isJoiValidationError(error: Error): boolean {
    const validationError = error as Joi.ValidationError;
    return !isNil(validationError) && validationError.isJoi === true && validationError instanceof Error;
}

export function joiValidate<T>(joiSchema: Joi.Schema, body: T): ValidationResult<T> {
    const validationResult = joiSchema.validate<T>(body, JOI_OPTIONS);
    return validationResult;
}

export function createJoiResponseError(error: Joi.ValidationError): ResponseError {
    const JOI_VALIDATION_ERROR_RESPONSE_ERROR: ResponseError = {
        payload: error,
        ...JOI_VALIDATION_ERROR,
    };

    return JOI_VALIDATION_ERROR_RESPONSE_ERROR;
}

export function joiRequestValidation<T>(joiSchema: Joi.Schema, body: any, message?: string): T {
    const validationResult = joiValidate<T>(joiSchema, body);
    const { error, value } = validationResult;

    if (!isNil(error)) {
        const joiResponseError = createJoiResponseError(error);
        throw new ValidationException(message || 'Invalid Input', joiResponseError);
    }

    return value;
}
