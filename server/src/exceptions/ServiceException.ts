import { ResponseError } from '../types/classes/ResponseError';
import { BaseException } from './BaseException';

export class ServiceException extends BaseException {
    constructor(
        message: string,
        responseError: ResponseError,
    ) {
        super(message, responseError);
    }
}
