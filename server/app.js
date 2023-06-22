const express=require("express")
const app=express();
const expenserouter=require("./routes/expenseroute")
const body_praser=require("body-parser")
const expenses=require("./modles/expensemodel")
const users=require("./routes/userroutes")
const loinrouter=require("./routes/loginrout")
const sequelize=require("./config/databseconfig")
const cors=require("cors")
app.use(cors())
app.use(body_praser.json())


app.use("/user",users)
app.use("/signin",loinrouter)
app.use("/api",expenserouter)
sequelize.sync().then(()=>{
    console.log("seq sucsess")
})
app.listen(5000,()=>{console.log("sucsess")})
