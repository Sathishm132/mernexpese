
const expenses=require("../modles/expensemodel")

const sequelize=require("sequelize");
const uploadtos3=require("../serviceses/aws")
const download=require("../modles/downloadmodel")

require("dotenv").config()

const { json } = require("body-parser");

exports.getleaderboard=async(req,res)=>{
try{
    const leaderBoard= await users.findAll({
        attributes:["id","name","totalamount"],
       
        order:[["totalamount","DESC"]]
    })
    await console.log(leaderBoard)
   
    res.json(leaderBoard)
}
catch(err){
    console.log(err)

}
}

exports.download=async(req,res)=>{
    try{
      const expense= await expenses.findAll({where:{
            userId:req.user.id
        }})
        const filename=await `Expense${req.user.id}/${new Date()}.text`
       const stingifyexpense=await JSON.stringify(expense)
        console.log(stingifyexpense)
       await uploadtos3.uploadtos3(stingifyexpense,filename)
       await download.create({
        Url:`https://expenseprojectsat.s3.us-west-2.amazonaws.com/${filename}`,
        userId:req.user.id
       })
      await res.json({Url:`https://expenseprojectsat.s3.us-west-2.amazonaws.com/${filename}`})
      
    }catch(errr){
        console.log(errr)
    }
    
}