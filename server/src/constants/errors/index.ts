import { ResponseError } from '../../types/classes/ResponseError';

/**
 * statusCode >= 50000: Internal Error, Should alert the developer
 */

export const UNKNOWN_SERVER_ERROR: ResponseError = {
    statusCode: 50000,
    message: 'UNKNOWN_SERVER_ERROR',
};

// used for the explicitly throwing the error
export const INTERNAL_SERVER_ERROR: ResponseError = {
    statusCode: 50010,
    message: 'UNKNOWN_SERVER_ERROR',
};

/**
 * 10000 <= statusCode < 20000: processing data errors
 */

export const JOI_VALIDATION_ERROR: ResponseError = {
    statusCode: 10000,
    message: 'JOI_VALIDATION_ERROR',
};

/**
 * 20000 <= statusCode < 40000: service errors
 */

/**
 * Authentication
 */

export const USER_ALREADY_EXIST_ERROR: ResponseError = {
    statusCode: 20100,
    message: 'USER_ALREADY_EXIST',
};

export const USER_NOT_FOUND: ResponseError = {
    statusCode: 20101,
    message: 'USER_NOT_FOUND',
};

export const INCORRECT_PASSWORD: ResponseError = {
    statusCode: 20102,
    message: 'INCORRECT_PASSWORD',
};

export const USER_ID_DOES_NOT_MATCH: ResponseError = {
    statusCode: 20120,
    message: 'USER_ID_DOES_NOT_MATCH',
};

export const JWT_TOKEN_EXPIRED: ResponseError = {
    statusCode: 20121,
    message: 'JWT_TOKEN_EXPIRED',
};

export const JWT_INVALID_TOKEN: ResponseError = {
    statusCode: 20122,
    message: 'JWT_INVALID_TOKEN',
};

export const JWT_TOKEN_MISSING: ResponseError = {
    statusCode: 20123,
    message: 'JWT_TOKEN_MISSING',
};

/**
 * Authorization Error
 */
export const AUTHORIZATION_DO_NOT_HAVE_PERMISSION_ERROR: ResponseError = {
    statusCode: 25000,
    message: 'AUTHORIZATION_DO_NOT_HAVE_PERMISSION_ERROR',
};
