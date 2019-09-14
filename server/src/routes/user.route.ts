import express from 'express';
import { HandlerReturn } from '../types/RouteHandler';
import { userController } from '../controllers';
import { expressHandlerWrapper } from '../frameworks/express/handlerWrapper';

async function createUserHandler(req: express.Request): Promise<HandlerReturn> {
    const result = await userController.createUser(req);
    return result;
}

async function changePasswordHandler(req: express.Request): Promise<HandlerReturn> {
    const result = await userController.changePassword(req);
    return result;
}

export function UserRoute(): express.Router {
    const router = express.Router();

    router.post('/createUser', expressHandlerWrapper(createUserHandler));
    router.post('/changePassword', expressHandlerWrapper(changePasswordHandler));

    return router;
}
