## Description
A simple SAM backend that uses the aws dynamodb sdk for javascript v3 to get info from a local dynamodb table.

## Setup
- Install [docker](https://docs.docker.com/desktop/)
- Install [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html)
- Install [Powershell Core](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.3) (cross platform)
- Install [Node 16](https://nodejs.org/en/download/)

## Running the App
###### NOTE: All command blocks are in powershell from the root of the repo

Install node modules
```pwsh
cd common-layer/nodejs
npm install
```

Launch DynamoDB local
```pwsh
cd utils
.\StartLocalDB.ps1
```

Start SAM local
```
npm start
```

Give it a shot
```pwsh
curl http://127.0.0.1:3000/hello
```