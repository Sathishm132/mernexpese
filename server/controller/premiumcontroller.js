
const expenses=require("../modles/expensemodel")
const users=require("../modles/usermodel")
const sequelize=require("sequelize")

exports.getleaderboard=async(req,res)=>{
try{
    const leaderBoard= await users.findAll({
        attributes:["id","name",[sequelize.fn("sum",sequelize.col("expenses.expenseamount")),"totalamount"]],
        include:[
            {
                model:expenses,
                attributes:[],
            }
        ],
        group:["user.id"],
        order:[["totalamount","DESC"]]
    })
    await console.log(leaderBoard)
   
    res.json(leaderBoard)
}
catch(err){
    console.log(err)

}
}