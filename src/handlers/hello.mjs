export async function helloHandler(event) {

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "hello"
        })
    };

    return response;
}
