const users=require("../modles/usermodel")
const bcrypt=require("bcrypt")
const jwt= require("jsonwebtoken")
exports.postlogin=(req,res)=>{
    users.findAll({
        where:{
            email:req.body.email
        }
    }).then((result)=>{
        
        if(result.length>0){
            
            bcrypt.compare(req.body.password, result[0].password, function(err, resul) {
                if(resul===true){
                 const token=  jwt.sign({ id:result[0].id,name:result[0].name }, 'shhhhh')
                    return  res.json({"token":token})
                        }
            else{
                         return   res.json("passwod does not match")
                        }
            })
            
        }
        else{
            return res.json("user does not exist")
        }
       
    })

}