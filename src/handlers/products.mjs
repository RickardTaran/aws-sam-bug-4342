import { Statement } from '../utils/dynamodb.mjs'

export async function rootHandler(event) {
    const data = await Statement('SELECT * FROM products')
    const response = {
        statusCode: 200,
        body: JSON.stringify(data)
    };
    return response;
}