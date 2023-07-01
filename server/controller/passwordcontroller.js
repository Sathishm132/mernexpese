const Sib=require("sib-api-v3-sdk")
require('dotenv').config()
exports.postemail=(req,res)=>{
const defaultClient = Sib.ApiClient.instance;
const apiKey = Sib.authentications['api-key'];
apiKey.apiKey = "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"


const tranEmailApi = new Sib.TransactionalEmailsApi();

const sender={
    email:"sathish.132ms@gmail.com"
}
const reciver=[{
    email:"mragul164@gmail.com"
}]
tranEmailApi.sendTransacEmail({
    sender,
    to:reciver,
    subject:"hclulufj qhjql",
    textContent:"yuc    qu7dfgd2w"
}).then((result)=>{
    console.log(result)
    res.json("sucsess")
})



    
}