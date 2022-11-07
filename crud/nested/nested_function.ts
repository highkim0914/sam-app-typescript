import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
// import { Client } from 'ts-postgres';

// const host : string | undefined = process.env.HOST;
// const port : number | undefined = Number(process.env.PORT);
// const user : string | undefined = process.env.USER;
// const database : string | undefined = process.env.DB;

// console.log(host, port, user, database);

// const client = new Client({
//     host: host,
//     port: port,
//     user: user,
//     database: database,
// });

// async function init() {
//     await client.connect();
// }

// init();

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    // let event_json : {name : any};
    // if(event.body !== null) {
    //     event_json = JSON.parse(event.body);
    // }
    // else{
    //     event_json = JSON.parse("{}");
    // }
    // console.log(event_json);
    // try {
    //     const result = client.query('INSERT INTO public.kakao (name) VALUES ($1)', [event_json.name]);
        
    // } catch (error) {
    //     console.log(error);
    // }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hi',
        }),
    };
};