import { isNil } from 'lodash';

import { BaseDto } from '../../dtos/Base.dto';
import { ResponseError } from '../../types/classes/ResponseError';


export enum ResponseStatus {
    success = 'success',
    error = 'error',
}

type ResponseData = any;

export interface ResponseType {
    status: ResponseStatus;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: ResponseData;
    error?: ResponseError;
}

export function formatResponse(error?: ResponseError, result?: BaseDto): ResponseType {
    if (!isNil(error)) {
        return {
            status: ResponseStatus.error,
            error,
        };
    }

    return {
        status: ResponseStatus.success,
        data: result,
    };
}
