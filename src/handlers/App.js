const createStatus = require('../CollectionsStatus/CreateStatus');
const retrieveStatus = require('../CollectionsStatus/RetrieveStatus');



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
            const response = await retrieveStatus(email);
            console.log(response)
        return {
            "statusCode":200,
            "body":response,
            "headers":{"Access-Control-Allow-Origin": "*"},
            "isBase64Encoded": false
            }
        } catch(error) {
            return { error: "error" }
        }
    break;

    case "/createstatus":
        try {
            console.log("creating a new login")
            console.log(requestjsonparse)
            const response = await createStatus(requestjsonparse);
            console.log(response)
        return {
            "statusCode":200,
            "body":response,
            "headers":{"Access-Control-Allow-Origin": "*"},
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
