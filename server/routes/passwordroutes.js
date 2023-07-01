const routes=require("express").Router();
const passwordcontroller=require("../controller/passwordcontroller")
routes.post("/",passwordcontroller.postemail)
routes.get("/:id",passwordcontroller.getrest)

module.exports=routes