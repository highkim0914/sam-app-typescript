import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Client } from 'ts-postgres';
import {init} from '../src/db-module/db';
import S3 from 'aws-sdk/clients/s3';

const s3 = new S3({ apiVersion: '2006-03-01' });

const client: Client = init();

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