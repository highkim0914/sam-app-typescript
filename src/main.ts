import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Client } from 'ts-postgres';
import {init} from './db-module/db';

const client : Client = init();

export const lambdaHandler = async (): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }),
    };
};