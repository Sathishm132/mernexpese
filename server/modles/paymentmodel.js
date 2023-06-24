const Sequelize= require("sequelize")
const db=require("../config/databseconfig")
const Order=db.define("orders",{
    id:{
        type: Sequelize.INTEGER,
        unique: true ,
        autoIncrement:true,
        primaryKey: true
    },
    orderid:Sequelize.STRING,
    paymentid:Sequelize.STRING,
    paymentstatus:Sequelize.STRING,

})
module.exports=Order