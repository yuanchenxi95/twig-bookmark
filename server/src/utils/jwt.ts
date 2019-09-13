import jwt from 'jsonwebtoken';
import { Config } from '../frameworks/config/index';


export interface UserJWTPayload {
    username: string;
}

export function generateJWT(userJWTPayload: UserJWTPayload): string {
    const { username } = userJWTPayload;

    return jwt.sign({ username }, Config.getSecret(), {
        algorithm: 'HS512', // HMAC using SHA-512 hash algorithm
        expiresIn: 60 * 60 * 24 * 7, // expires in a week
    });
}

export function decodeJWT(token: string): UserJWTPayload {
    return jwt.verify(token, Config.getSecret()) as UserJWTPayload;
}
