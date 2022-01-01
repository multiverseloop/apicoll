const retrieveStatus = require('../CollectionsStatus/RetrieveStatus');
const retreiveStatus = require('../CollectionsStatus/RetrieveStatus');


exports.handler = async (event) => {
console.log('in App.js')

switch(event.path) {
    case "/retrievestatus":
        try {
            console.log("Trying to find email records")
            console.log(event.body)
            const response = await retrieveStatus(event.body);
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
