import { ResponseError } from '../types/classes/ResponseError';
import { BaseException } from './BaseException';
import { INTERNAL_SERVER_ERROR } from '../constants/errors';

export class InternalServerException extends BaseException {
    constructor(
        message: string,
        responseError: ResponseError = INTERNAL_SERVER_ERROR,
    ) {
        super(message, responseError);
    }
}
