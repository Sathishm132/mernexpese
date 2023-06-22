const Sequelize=require("sequelize");
const db=require("../config/databseconfig")
const expense=db.define("expenses",{
    id:{
      type: Sequelize.INTEGER,
      unique: true ,
      autoIncrement:true,
      primaryKey: true
    },
    expenseDate:{
        type:Sequelize.STRING,
        allowNull:false
    },
    expensecategory:{
        type:Sequelize.STRING,
        allowNull:false
    },
    expenseamount:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    expenseDescription:{
        type:Sequelize.STRING,
        allowNull:false
    }

})
module.exports=expense;