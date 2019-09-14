import Express from 'express';

import { Log } from '../logging';
import { formatResponse, ResponseData } from './responseFormatter';
import { BaseException } from '../../exceptions/BaseException';
import { UNKNOWN_SERVER_ERROR } from '../../constants/errors';

function logError(error: Error): void {
    Log.error(error);
}

export function unknownErrorHandler(error: Error): Error {
    logError(error);
    return error;
}


export function handleError(error: Error): ResponseData {
    // known Error
    if (error instanceof BaseException) {
        return formatResponse((error as BaseException).responseError);
    }

    // handle unknown Error;
    unknownErrorHandler(error);
    return formatResponse(UNKNOWN_SERVER_ERROR);
}

/**
 * express error handler, this method should never be executed
 * If this method is executed, the errorWrapper failed to catch all the errors.
 * @param error
 * @param req
 * @param res
 * @param next
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function expressErrorHandler(error: Error, req: Express.Request, res: Express.Response, next: Express.NextFunction): void {
    logError(error);
    logError(new Error('expressErrorHandler() is executed, errorWrapper failed to capture the previous error.'));
    if (res.headersSent) {
        next(error);
        return;
    }

    const formattedResponse = handleError(error);
    // return 500 to notify the frontend, that the error is not correctly handled
    res.status(500).json(formattedResponse);
}
