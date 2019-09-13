import express from 'express';
import { AuthenticationRoute } from './authentication.route';
import { UserRoute } from './user.route';
import { StarRoute } from './star.route';

const routeNotFoundHandler = (req: express.Request, res: express.Response): void => {
    const {
        method,
        url,
    } = req;
    const notFoundMessage = `Cannot ${method} ${url}`;
    res.status(404).json(notFoundMessage);
};

export function configRoutes(app: express.Express): void {
    const apiRouter = express.Router();
    app.use('/api', apiRouter);

    apiRouter.use('/authentication', AuthenticationRoute());
    apiRouter.use('/user', UserRoute());
    apiRouter.use('/star', StarRoute());


    // this should be the last of the api router configuration
    apiRouter.use(routeNotFoundHandler);
}
