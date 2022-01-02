const stripe = require("stripe")('sk_test_51JzgHuIeuSsnNXhOTSFF7RoN7JVwJDaboabA79ev0i9dg5nyoZ0Ncslf86sRPcPaardNZml7mtA8UzobLCeIOvZH00XVM91cJZ');

async function createpaymentintent(req) {
    console.log(req.amount)
    const params = {
        amount:req.amount,
        currency:"eur",
        automatic_payment_methods: {
            enabled:true
        }
    }
    console.log(params)
    try{
        console.log("fetching intent")
    const paymentIntent = await stripe.paymentIntents.create(params)
    return JSON.stringify({
        clientSecret:paymentIntent.client_secret
        })
    }catch (err) {
        return err
      }


}

module.exports= createpaymentintent;