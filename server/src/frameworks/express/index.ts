
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import { expressErrorHandler } from './errorHandler';

export function configExpress(app: express.Express): void {
    // Compression middleware (should be placed before express.static)
    app.use(compression({ threshold: 512 }));

    // Configure CORS
    app.use(cors());

    // // Static files middleware
    // app.use('/public', express.static(Config.root + 'build'));

    // bodyParser should be above methodOverride
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({
        limit: '10mb',
        extended: true,
    }));

    // use pug as view engine
    // app.set('views', path.join(__dirname, 'views'))
    // app.set('view engine', 'pug')
}

export function configExpressAfterRoutes(app: express.Express): void {
    app.use(expressErrorHandler);
}
