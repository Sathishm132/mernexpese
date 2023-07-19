const Sequelize=require('sequelize')
const sequelize = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.DB,
    dialect:'mysql'
  });
  module.exports=sequelize
  
  
  
