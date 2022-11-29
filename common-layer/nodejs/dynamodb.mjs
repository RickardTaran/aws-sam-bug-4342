import { DynamoDBClient, ExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const DynamoClient = new DynamoDBClient({
    endpoint: 'http://dynamo-local:8000'
})

const Statement = async (Statement) => {
    let response = {}
    try {
        const command = new ExecuteStatementCommand({ Statement })
        response = await DynamoClient.send(command).then(data => {
            return data.Items.map(i => unmarshall(i))
        })
    } catch (error) {
        response  = { error }
    }
    return response
}

export { Statement }