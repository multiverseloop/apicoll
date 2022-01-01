const retrieveStatus = require('../CollectionsStatus/RetrieveStatus');
const retreiveStatus = require('../CollectionsStatus/RetrieveStatus');


exports.handler = async (event) => {
console.log('in App.js')
requestbody = JSON.stringify(event.body)
console.log(requestbody)
console.log(requestbody.email)

switch(event.path) {
    case "/retrievestatus":
        try {
            console.log("Trying to find email records")
            console.log(event.body.email)
            const response = await retrieveStatus(event.body.email);
            console.log(response)
        return {
            "statusCode":200,
            "body":response,
            "isBase64Encoded": false
            }
        } catch(error) {
            return { error: "error" }
        }
    break;

    default:
        return { error: "error" }
    break;
    


}
}
