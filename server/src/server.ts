
import express from 'express';

import { Config, NODE_ENV_ENUM } from './frameworks/config/index';
import { Log } from './frameworks/logging/index';
import { configExpress, configExpressAfterRoutes } from './frameworks/express/index';
import { configRoutes } from './routes/index';
import { connectToMongoDB } from './frameworks/mongoose/index';

// register all the models
import './models/index';

/**
 * kick start express server
 * @param app
 */
function listen(app: express.Express): void {
    if (Config.getNodeEnv() === NODE_ENV_ENUM.test) return;
    const port = Config.getPort();
    app.listen(port);
    Log.log(`Express app started on port ${port}`);
}

export async function bootstrap(): Promise<void> {
    const app: express.Express = express();
    configExpress(app);
    configRoutes(app);
    configExpressAfterRoutes(app);


    await connectToMongoDB(Config.getDatabaseUrl());

    listen(app);
}
