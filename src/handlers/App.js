const retrieveStatus = require('../CollectionsStatus/RetrieveStatus');
const retreiveStatus = require('../CollectionsStatus/RetrieveStatus');


exports.handler = async (event) => {
console.log('in App.js')
console.log(event)
try {
const response = await retrieveStatus(event);
console.log(response)
return {
    "statusCode":200,
    "body":response,
    "isBase64Encoded": false
}
} catch(error) {
    return { error: err }
}


}