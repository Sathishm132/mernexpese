const Sequelize=require("sequelize");
const db=require("../config/databseconfig")
const Download=db.define("userdownloadedlist",{
    id:{
        type:Sequelize.INTEGER,
        unique: true ,
        autoIncrement:true,
        primaryKey: true
    },
    Url:{
        type:Sequelize.STRING
    }
})
module.exports=Download