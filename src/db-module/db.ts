import { Client } from 'ts-postgres/dist/src/client';

export function init() {
    const host: string | undefined = process.env.HOST;
    const port: number | undefined = Number(process.env.PORT);
    const user: string | undefined = process.env.USER;
    const database: string | undefined = process.env.DB;
    const client = new Client({
        host: host,
        port: port,
        user: user,
        database: database,
    });
    client.connect();
    return client;
};