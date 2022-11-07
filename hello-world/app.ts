console.time('time');
import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Client } from 'ts-postgres';
import S3 from 'aws-sdk/clients/s3';

var s3 = new S3({ apiVersion: '2006-03-01' });

const host: string | undefined = process.env.HOST;
const port: number | undefined = Number(process.env.PORT);
const user: string | undefined = process.env.USER;
const database: string | undefined = process.env.DB;

console.log(host, port, user, database);

const client = new Client({
    host: host,
    port: port,
    user: user,
    database: database,
});


async function init() {
    await client.connect();
}

init();

console.timeEnd('time');

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.time('execution time');
    console.log(JSON.stringify(event));
    try {
        const result = client.query('SELECT * FROM public.kakao');
        for await (const row of result) {
            console.log(row);
        }
    } catch (error) {
        console.log(error);
    }
    console.timeEnd('execution time');
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }),
    };
};