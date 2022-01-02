var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "https://dynamodb.eu-central-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();
  
async function createStatus(req) {
console.log(req.email)
console.log(req.collectionsStatus)

const table = "collectionsDetails";
const Item = {
   
  email: req.email,
  collectionsStatus:req.collectionsStatus,
  resolvedStatus:false      

}

const params = {
  TableName:table,
  Item:Item
}
console.log("printing params")
console.log(params.Item);

try{
  const data = await docClient.put(params).promise()
  console.log(data)
  console.log("its your lucky day. Added the email")
  return JSON.stringify({
                collectionsStatus:"NEW_LOGIN",
                resolvedStatus:false
    })
  } catch (err) {
  return err
}
}

module.exports= createStatus;