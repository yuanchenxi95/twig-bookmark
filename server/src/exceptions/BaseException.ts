import { ResponseError } from '../types/classes/ResponseError';

export class BaseException extends Error {
    public readonly responseError;

    constructor(
        message: string,
        responseError: ResponseError,
    ) {
        super(message);
        this.responseError = responseError;
    }
}
