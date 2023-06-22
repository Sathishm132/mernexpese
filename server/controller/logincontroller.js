const users=require("../modles/usermodel")
const bcrypt=require("bcrypt")
exports.postlogin=(req,res)=>{
    users.findAll({
        where:{
            email:req.body.email
        }
    }).then((result)=>{
        bcrypt.compare(req.body.password, result[0].password, function(err, resul) {
            if(resul===true){
                res.json("sucserss")
            }
        });
    })

}