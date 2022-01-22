var AWS = require("aws-sdk");

console.log("Inside the post content");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "https://dynamodb.eu-central-1.amazonaws.com"
});

var lexruntime = new AWS.LexRuntime();
  
async function postContent(req) {
console.log(req.userId)
console.log(req.message)




var params = {
    botAlias: 'collections-help', /* required */
    botName: 'collections-help', /* required */
    contentType: 'text/plain; charset=utf-8', /* required */    
    userId: req.userId, /* required */
    accept: 'text/plain; charset=utf-8',
    
  };
  
  try{
    console.log("are you here")
    const data = await lexruntime.postText(params)
    console.log(data.intentName)
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
        console.log("Final errir "+err)
    return err
  }
 

}

module.exports= postContent;