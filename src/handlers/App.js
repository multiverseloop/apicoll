const retrieveStatus = require('../CollectionsStatus/RetrieveStatus');
const retreiveStatus = require('../CollectionsStatus/RetrieveStatus');


exports.handler = async (event) => {
console.log('in App.js')
console.log(event.body)
console.log("JSON Parse")
const requestjsonparse = JSON.parse(event.body)
console.log(requestjsonparse)
const email = requestjsonparse.email
console.log(email)

switch(event.path) {
    case "/retrievestatus":
        try {
            console.log("Trying to find email records")
            console.log(requestjsonparse)
            const response = await retrieveStatus(requestjsonparse);
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
