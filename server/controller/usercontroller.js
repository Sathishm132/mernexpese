const users = require("../modles/usermodel")

exports.postuser=(req,res)=>{
    if(req.body.name){
        users.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }).then(()=>{
            res.json("sucsees")
        }).catch((err)=>{
            res.json("user already exist")
        })
    }
    else{
        users.findAll({
            where:{
                email:req.body.email
            }
        }).then((result)=>{
             if(result[0].password===req.body.password){
                return res.json("login sucess")
             }
             else{
                return res.json("password does not match")
             }
        })
    }
   

}
exports.getuser=(req,res)=>{

}