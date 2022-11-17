import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const DynamoClient = new DynamoDBClient({
    endpoint: 'http://dynamo-local:8000'
})

const Statement = async (statement) => {
    return await DynamoClient.executeStatement({
        statement
    }).then(data => {
        return data.Items.map(i => AWS.DynamoDB.Converter.unmarshall(i))
    })
}

export { Statement }