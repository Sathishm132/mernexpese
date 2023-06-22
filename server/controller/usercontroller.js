const users = require("../modles/usermodel")

exports.postuser=(req,res)=>{
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
exports.getuser=(req,res)=>{

}