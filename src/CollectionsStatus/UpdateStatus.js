var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "https://dynamodb.eu-central-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();
  
async function UpdateStatus(req) {
console.log(req.email)
console.log(req.collectionsStatus)

const table = "collectionsDetails";
const Key = {
   
  email: req.email
}

var params = {
  TableName:table,
  Key:Key,
  UpdateExpression: "set collectionsStatus = :c , resolvedStatus = :r, resolvedData = :d", 
  ExpressionAttributeValues:{
    ":c" : req.collectionsStatus,
    ":r" : req.resolvedStatus,
    ":d"  : req.resolvedData
  }
}

console.log("printing params")
console.log(params.Item);

try{
  const data = await docClient.update(params).promise()
  console.log(data)
  console.log("its your lucky day. Updated Status")
  return JSON.stringify({
    status:"OK"
    })
  } catch (err) {
      return err
}
}

module.exports= UpdateStatus;