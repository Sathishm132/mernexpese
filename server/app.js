const express=require("express")
const app=express();
const expenserouter=require("./routes/expenseroute")
const body_praser=require("body-parser")
const expenses=require("./modles/expensemodel")
const User=require("./modles/usermodel")
const users=require("./routes/userroutes")
const loinrouter=require("./routes/loginrout")
const sequelize=require("./config/databseconfig")
const pymentrouter=require("./routes/payment")
const order=require("./modles/paymentmodel")
const premiumrouter=require("./routes/premium")
const cors=require("cors")
app.use(cors())
app.use(body_praser.json())


app.use("/user",users)
app.use("/premium",premiumrouter)
app.use("/signin",loinrouter)
app.use("/api",expenserouter)
app.use("/payment",pymentrouter)
User.hasMany(expenses);
expenses.belongsTo(User);
User.hasMany(order)
order.belongsTo(User)


sequelize.sync().then(()=>{
console.log("seq sucsess")
})
app.listen(5000,()=>{console.log("sucsess")})
