const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendemail(req) {

const params = {
    to:req.email,
    from:{
        "email":"test@collections.sayshank.com",
        "name":"Bank of Naboo"
    },
    templateId:req.templateId
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

try{
    const response = await sgMail.send(params)
    console.log(response);
    return JSON.stringify({
        status:"OK"
        })     
}catch (err) {
        return err
      }


}

module.exports= sendemail;