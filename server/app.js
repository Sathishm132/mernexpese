const express=require("express")
const app=express();
const expenserouter=require("./routes/expenseroute")
const body_praser=require("body-parser")
const sequelize=require("./modles/expensemodel")
const cors=require("cors")
app.use(cors())
app.use(body_praser.json())

app.use("/api",expenserouter)
sequelize.sync().then(()=>{
    console.log("seq sucsess")
})
app.listen(5000,()=>{console.log("sucsess")})
