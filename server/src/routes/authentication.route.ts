import express from 'express';
import { HandlerReturn } from '../types/RouteHandler';
import { authenticationController } from '../controllers';
import { expressHandlerWrapper } from '../frameworks/express/handlerWrapper';

async function loginUserHandler(req: express.Request): Promise<HandlerReturn> {
    const result = await authenticationController.login(req);
    return result;
}

export function AuthenticationRoute(): express.Router {
    const router = express.Router();

    router.post('/login', expressHandlerWrapper(loginUserHandler));

    return router;
}
