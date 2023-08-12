const users = require("../modles/usermodel")
const encrypt=require("bcrypt")

exports.postuser=(req,res)=>{
    encrypt.hash(req.body.password, 10, function(err, hash) {
        users.create({
            name:req.body.name,
            email:req.body.email,
            password:hash
        }).then(()=>{
            res.json("sucsees")
        }).catch((err)=>{
            res.json("user already exist")
        })
    });
    
        
    
    

}
exports.getuser=(req,res)=>{

}