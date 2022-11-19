import { Statement } from './dynamo.js'

export async function lambdaHandler(event) {

    const data = await Statement('SELECT * FROM products')
    const response = {
        statusCode: 200,
        body: JSON.stringify(data)
    };
    return response;
}