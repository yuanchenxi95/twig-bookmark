import { InternalServerException } from '../exceptions/InternalServerException';


export function parseURL(url: string): URL {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl;
    } catch (e) {
        throw new InternalServerException(e.message);
    }
}
