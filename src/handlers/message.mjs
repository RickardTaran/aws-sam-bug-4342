export async function messageHandler(event) {

    console.log(JSON.parse(event.body).message)

    const response = {
        statusCode: 200,
        body: JSON.stringify({})
    };

    return response;
}