var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "https://dynamodb.eu-central-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();
  
async function retrieveStatus(req) {
console.log(req);
const table = "collectionsDetails";
const Key = {
  email: req // Change to your recipient       
}
const params = {
  TableName:table,
  Key:Key
}
console.log("printing params")
console.log(params);

try{
  const data = await docClient.get(params).promise()
  console.log(data)
  if(data.Item == undefined) {
    console.log("Did not find existing Login with the email. Hence returning NOT FOUND")
    return JSON.stringify({
      collectionsStatus:"NOT_FOUND",
      resolvedStatus:false,
      resolvedData:""
    })
  }
  else {
    console.log("its your lucky day. Found the email")
    return JSON.stringify({
                collectionsStatus:data.Item.collectionsStatus,
                resolvedStatus:data.Item.resolvedStatus,
                resolvedData:data.Item.resolvedData
    })
  }
  } catch (err) {
  return err
}
}

module.exports= retrieveStatus;