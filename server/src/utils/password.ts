import crypto from 'crypto';

/**
 * generate a random string
 */
export function generateSalt(): string {
    return Math.round((new Date().valueOf() * Math.random())).toString();
}

export function hashPassword(password: string, salt: string): string {
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
}
