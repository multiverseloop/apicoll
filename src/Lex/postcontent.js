var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "https://runtime-v2-lex.eu-central-1.amazonaws.com"
});
var lexruntimev2 = new AWS.LexRuntimeV2();


  
async function postContent(req) {
  console.log("Inside the post content");
console.log(req.userId)
console.log(req.message)

var params = {
  botAliasId: 'ROKPS45PFF', /* required */
  botId: 'DFALXMKYPN', /* required */
  localeId: 'en_GB', /* required */
  requestContentType: 'text/plain; charset=utf-8', /* required */
  inputStream:'I already paid',
  sessionId: 'abc1234', /* required */
};
try{
const data = await lexruntimev2.recognizeUtterance(params).promise()
console.log(data);
return JSON.stringify({
  status:"OK"
  })
} catch (err) {
  return err
}

}

module.exports= postContent;