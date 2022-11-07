import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Client } from 'ts-postgres';


export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }),
    };
};