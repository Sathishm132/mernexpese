const Sib=require("sib-api-v3-sdk")
const bcrypt=require("bcrypt")
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
const id=req.params.id
const fpr=await frgtpassreqs.findOne({where:{id:req.params.id}})
if(fpr){
    res.status(200).send(`<html>
    <script>
        function formsubmitted(e){
            e.preventDefault();
            console.log('called')
        }
    </script>

    <form action="/password/updatepassword/${id}" method="get">
        <label for="newpassword">Enter New password</label>
        <input name="newpassword" type="password" required></input>
        <button>reset password</button>
    </form>
</html>`)
}


}
exports.updatepassword=(req,res)=>{
    try {
        const { newpassword } = req.query;
        const { resetpasswordid } = req.params;
        frgtpassreqs.findOne({ where : { id: resetpasswordid }}).then(resetpasswordrequest => {
            user.findOne({where: { id : resetpasswordrequest.userId}}).then(user => {
                
                if(user) {
                

               
                        bcrypt.hash(newpassword, 10, function(err, hash) {
                            
                            if(err){
                                console.log(err);
                                throw new Error(err);
                            }
                            user.update({ password: hash }).then(() => {
                                res.status(201).json({message: 'Successfuly update the new password'})
                            })
                        });
                    }
             else{
                return res.status(404).json({ error: 'No user Exists', success: false})
            }
            })
        })
    } catch(error){
        return res.status(403).json({ error, success: false } )
    }}
