import { ResponseError } from '../types/classes/ResponseError';

export class BaseException extends Error {
    public readonly responseError: ResponseError;

    constructor(
        message: string,
        responseError: ResponseError,
    ) {
        super(message);
        this.responseError = responseError;
    }
}
