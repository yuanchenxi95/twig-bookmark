import { Config } from './frameworks/config/index';
import { bootstrap } from './server';

const usingProduction = process.env.NODE_ENV === 'production';
const envFilePath = usingProduction ? '.env' : '.env.development';

Config.initializeConfig(envFilePath);

bootstrap()
    .catch((err): void => {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
    });
