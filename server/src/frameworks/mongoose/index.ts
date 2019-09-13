import mongoose from 'mongoose';
import { Log } from '../logging';


export async function connectToMongoDB(DatabaseURL: string): Promise<mongoose.Connection> {
    return new Promise<mongoose.Connection>((resolve, reject): void => {
        function connect(): mongoose.Connection {
            // mongoose.connect(config.mongodbURI, {
            mongoose.connect(DatabaseURL, { useNewUrlParser: true });
            return mongoose.connection;
        }

        const connection = connect();

        connection
            .on('error', (err: Error): void => {
                Log.error(err);
                reject(new Error(err.message));
            })
            .on('disconnected', connect)
            .once('open', (): void => {
                resolve(connection);
            });
    });
}
