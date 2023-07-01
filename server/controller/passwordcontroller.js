const Sib=require("sib-api-v3-sdk")
require('dotenv').config()
const { v4: uuidv4 } = require("uuid");
const frgtpassreqs=require("../modles/resetpassword")
const user=require("../modles/usermodel");
exports.postemail=async(req,res)=>{
const email=req.body.email
const users=await user.findAll({where:{
    email:email
}})
const id=users[0].id
const uuid= await uuidv4()
await frgtpassreqs.create({
    id:uuid,
    isactive:true,
    userId:id
},)
console.log(users)
const url=`http://localhost:5000/password/${uuid}`

const defaultClient = Sib.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY


const tranEmailApi = new Sib.TransactionalEmailsApi();

const sender={
    email:"sathish.132ms@gmail.com"
}
const reciver=[{
    email:"sathish.132ms@gmail.com"
}]
tranEmailApi.sendTransacEmail({
    sender,
    to:reciver,
    subject:"password reset",
    textContent:"reset password",
    htmlContent:`click <br/><a href=${url}>clickhee</a>`
}).then((result)=>{
    console.log(result)
    res.json("sucsess")
})



    
}
exports.getrest=async(req,res)=>{
console.log(req.params)
const fpr=await frgtpassreqs.findOne({where:{id:req.params.id}})

res.json("ffrst")
}