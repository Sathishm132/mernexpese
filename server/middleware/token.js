const jwt=require("jsonwebtoken")
const User=require("../modles/usermodel")
const auth=async(req,res,next)=>{
    const token=await req.header("Authorization")
   
   const decodes= await jwt.verify(token, 'shhhhh');
   const user=await User.findAll({where:{
    id:decodes.id
   }})

     req.user=user[0]
     next()
     


}
module.exports=auth