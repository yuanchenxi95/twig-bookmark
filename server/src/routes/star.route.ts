import express from 'express';
import { HandlerReturn } from '../types/RouteHandler';
import { starController } from '../controllers';
import { expressHandlerWrapper } from '../frameworks/express/handlerWrapper';

async function createStarHandler(req: express.Request): Promise<HandlerReturn> {
    const result = await starController.createStar(req);
    return result;
}


export function StarRoute(): express.Router {
    const router = express.Router();

    router.post('/create', expressHandlerWrapper(createStarHandler));

    return router;
}
