import {
    isNil, isString, isNumber,
} from 'lodash';

export interface ResponseError {
    statusCode: number;

    message: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

export function isResponseError(data: any): boolean {
    const responseError = data as ResponseError;

    return !isNil(responseError) && isNumber(responseError.statusCode) && isString(responseError.message);
}
