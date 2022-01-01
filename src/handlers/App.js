const retrieveStatus = require('../CollectionsStatus/RetrieveStatus');
const retreiveStatus = require('../CollectionsStatus/RetrieveStatus');


exports.handler = async (event) => {
console.log('in App.js')
console.log(event)
try {
const response = await retrieveStatus(event);
console.log(response)
return response
} catch(error) {
    return { error: err }
}


}