
import Joi from '@hapi/joi';
import path from 'path';
import dotenv from 'dotenv';

export interface EnvConfig {
    [key: string]: string;
}

export enum NODE_ENV_ENUM {
    development = 'development',
    production = 'production',
    test = 'test',
}

const DEFAULT_CONFIG = {
    NODE_ENV: process.env.NODE_ENV || NODE_ENV_ENUM.development,
    PORT: process.env.PORT || 6324,
};

export class Config {
    private static envConfig: EnvConfig;

    public static initializeConfig(filePath: string): void {
        const envFileFullPath = path.resolve(filePath);
        const { parsed } = dotenv.config({ path: envFileFullPath });
        this.envConfig = this.validateInput(parsed);
    }

    public static getValue(key: string): string {
        return this.envConfig[key];
    }

    public static getSecret(): string {
        return this.envConfig.SECRET;
    }

    public static getPort(): string {
        return this.envConfig.PORT;
    }

    public static getNodeEnv(): string {
        return this.envConfig.NODE_ENV;
    }

    public static getDatabaseUrl(): string {
        return this.envConfig.DATABASE_URL;
    }

    private static validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid([
                    NODE_ENV_ENUM.development,
                    NODE_ENV_ENUM.production,
                    NODE_ENV_ENUM.test,
                ])
                .default(DEFAULT_CONFIG.NODE_ENV),
            // API_AUTH_ENABLED: Joi.boolean().required(),
            PORT: Joi.alternatives()
                .try([
                    Joi.number().port(),
                    Joi.string(),
                ])
                .default(DEFAULT_CONFIG.PORT),
            SECRET: Joi.string().required(),
            DATABASE_URL: Joi.string().required(),
        });

        const {
            error,
            value: validatedEnvConfig,
        } = Joi.validate(
            envConfig,
            envVarsSchema,
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
}
