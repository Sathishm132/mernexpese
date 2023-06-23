const jwt=require("jsonwebtoken")
const User=require("../modles/usermodel")
const auth=(req,res,next)=>{
    const token=req.header("Authorization")
    console.log(token)
   const decodes= jwt.verify(token, 'shhhhh');
   User.findAll({where:{
    id:decodes.id
   }}).then((user)=>{
    req.user=user[0]
    next()
   })

}
module.exports=auth