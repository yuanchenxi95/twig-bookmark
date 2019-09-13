import {
    Request, Response, RequestHandler,
} from 'express';
import { isNil } from 'lodash';
import { compose } from 'lodash/fp';

import { RouteHandler, HandlerReturn } from '../../types/RouteHandler';
import { formatResponse, ResponseData } from './responseFormatter';
import { handleError } from './errorHandler';
import { isResponseError, ResponseError } from '../../types/classes/ResponseError';
import { BaseDto } from '../../dtos/Base.dto';


function handlerFnResult(fnResult: HandlerReturn): ResponseData {
    if (isNil(fnResult)) {
        return formatResponse(null, null);
    } if (isResponseError(fnResult)) {
        return formatResponse(fnResult as ResponseError, null);
    }

    return formatResponse(null, fnResult as BaseDto);
}

export function asyncErrorAndResponseFormatterWrapper(fn: RouteHandler): RequestHandler {
    return async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await fn(req, res);
            /**
             * format response
             */
            const formattedResponse = handlerFnResult(result);
            res.json(formattedResponse);
        } catch (error) {
            /**
             * error handler
             */
            const formattedResponse = handleError(error);
            res.json(formattedResponse);
        }
    };
}

export const expressHandlerWrapper = compose(
    asyncErrorAndResponseFormatterWrapper,
);
