const routes=require("express").Router();
const passwordcontroller=require("../controller/passwordcontroller")
routes.post("/",passwordcontroller.postemail)

module.exports=routes