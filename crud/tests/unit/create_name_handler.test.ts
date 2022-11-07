import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { lambdaHandler } from '../../create_name';

describe('Unit test for create_name handler', function () {
    it('verifies successful response', async () => {
        const event : APIGatewayProxyEvent = {
            httpMethod: 'post',
            body: '{\t\n  "name" : "kakaname"\n}',
            headers: {},
            isBase64Encoded: false,
            multiValueHeaders: {},
            multiValueQueryStringParameters: {},
            path: '/name',
            pathParameters: {},
            queryStringParameters: {},
            requestContext: {
                accountId: '123456789012',
                apiId: '1234',
                authorizer: {},
                httpMethod: 'post',
                identity: {
                    accessKey: '',
                    accountId: '',
                    apiKey: '',
                    apiKeyId: '',
                    caller: '',
                    clientCert: {
                        clientCertPem: '',
                        issuerDN: '',
                        serialNumber: '',
                        subjectDN: '',
                        validity: { notAfter: '', notBefore: '' },
                    },
                    cognitoAuthenticationProvider: '',
                    cognitoAuthenticationType: '',
                    cognitoIdentityId: '',
                    cognitoIdentityPoolId: '',
                    principalOrgId: '',
                    sourceIp: '',
                    user: '',
                    userAgent: '',
                    userArn: '',
                },
                path: '/name',
                protocol: 'HTTP/1.1',
                requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
                requestTimeEpoch: 1428582896000,
                resourceId: '123456',
                resourcePath: '/name',
                stage: 'dev',
            },
            resource: '',
            stageVariables: {},
        };
        const context : Context = {
            callbackWaitsForEmptyEventLoop: true,
            functionName: 'test',
            functionVersion: '1',
            invokedFunctionArn: 'arn:aws:lambda:us-east-1:123456789012:function:test',
            memoryLimitInMB: '128',
            awsRequestId: '1234567890',
            logGroupName: 'test',
            logStreamName: 'test',
            getRemainingTimeInMillis: () => 1000,
            done: () => {},
            fail: () => {},
            succeed: () => {},
        };
        
        const result: APIGatewayProxyResult = await lambdaHandler(event, context);

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(
            JSON.stringify({
                message: 'kakaname',
            }),
        );
    });
});
