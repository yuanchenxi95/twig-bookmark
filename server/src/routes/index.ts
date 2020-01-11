import express, { RequestHandler } from 'express';
import { expressHandlerWrapper } from '../frameworks/express/handlerWrapper';
import { HandlerReturn } from '../types/RouteHandler';
import {
    authenticationController, starController, userController,
} from '../controllers';
import { ControllerFunc } from '../types/Controller';
import {BaseController} from '../controllers/Base.controller';

const routeNotFoundHandler = (req: express.Request, res: express.Response): void => {
    const {
        method,
        url,
    } = req;
    const notFoundMessage = `Cannot ${method} ${url}`;
    res.status(404).json(notFoundMessage);
};


function handlerGenerator<T>(controller: BaseController, controllerFunc: ControllerFunc<T>): RequestHandler {
    async function handler(req: express.Request): Promise<HandlerReturn> {
        const result = await controllerFunc.call(controller, req);
        return result;
    }
    return expressHandlerWrapper(handler);
}

function authRoute(apiRouter: express.Router): void {
    const { login } = authenticationController;

    const router = express.Router();

    router.post('/login', handlerGenerator(authenticationController, login));
    apiRouter.use('/authentication', router);
}

function userRoute(apiRouter: express.Router): void {
    const { createUser, changePassword } = userController;

    const router = express.Router();

    router.post('/createUser', handlerGenerator(userController, createUser));
    router.post('/changePassword', handlerGenerator(userController, changePassword));
    apiRouter.use('/user', router);
}

function starRoute(apiRouter: express.Router): void {
    const { createStar } = starController;

    const router = express.Router();

    router.post('/create', handlerGenerator(starController, createStar));
    apiRouter.use('/star', router);
}

export function configRoutes(app: express.Express): void {
    const apiRouter = express.Router();
    app.use('/api', apiRouter);

    authRoute(apiRouter);
    userRoute(apiRouter);
    starRoute(apiRouter);

    // this should be the last of the api router configuration
    apiRouter.use(routeNotFoundHandler);
}
