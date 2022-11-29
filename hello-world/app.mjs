import { Statement } from '/opt/nodejs/dynamodb'

export async function lambdaHandler(event) {

    const data = await Statement('SELECT id, name FROM products')
    const response = {
        statusCode: 200,
        body: JSON.stringify(data)
    };
    return response;
}