const Sequelize= require("sequelize")
const db=require("../config/databseconfig")
const Forpassreq=db.define("frgtpassreq",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
        
    },
    isactive:{
        type:Sequelize.BOOLEAN
    }
})
module.exports=Forpassreq;