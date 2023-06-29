const Sequelize=require('sequelize')
const db=require("../config/databseconfig")
const users=db.define("user",{
    id:{
        type: Sequelize.INTEGER,
        unique: true ,
        autoIncrement:true,
        primaryKey: true
      },
      name:{
        type:Sequelize.STRING,
        
      },
      email:{
        type:Sequelize.STRING,
        unique:true,

      },
      password:{
        type:Sequelize.STRING,
      },
      premium:{
        type:Sequelize.BOOLEAN
      }
      
})
module.exports=users
