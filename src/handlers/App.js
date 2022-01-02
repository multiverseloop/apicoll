const createStatus = require('../CollectionsStatus/CreateStatus');
const retrieveStatus = require('../CollectionsStatus/RetrieveStatus');
const UpdateStatus = require('../CollectionsStatus/UpdateStatus');
const createpaymentintent = require('../Stripe/createpaymentintent');
const sendemail = require('../Twilio/sendemail');



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

    case "/updatestatus":
        try {
            console.log("Updating the status")
            console.log(requestjsonparse)
            const response = await UpdateStatus(requestjsonparse);
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

    case "/createpaymentintent":
        try {
            console.log("creating payment intent")
            console.log(requestjsonparse)
            const response = await createpaymentintent(requestjsonparse);
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

    case "/sendmail":
        try {
            console.log("sending email")
            console.log(requestjsonparse)
            const response = await sendemail(requestjsonparse);
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
