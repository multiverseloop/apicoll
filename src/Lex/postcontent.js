var AWS = require("aws-sdk");

console.log("Inside the post content");

var lexruntime = new AWS.LexRuntime();

AWS.config.update({
  region: "eu-central-1",
  endpoint: "https://dynamodb.eu-central-1.amazonaws.com"
});
  
async function postContent(req) {
console.log(req.userId)
console.log(req.message)
var params = {
    botAlias: 'collections-help', /* required */
    botName: 'collections-help', /* required */
    contentType: 'text/plain; charset=utf-8', /* required */    
    userId: req.userId, /* required */
    accept: 'text/plain; charset=utf-8',
    inputText: "I already made a payment"    
  };
  
  lexruntime.postText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
  
 

}

module.exports= postContent;