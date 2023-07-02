const routes=require("express").Router();
const passwordcontroller=require("../controller/passwordcontroller")
routes.post("/",passwordcontroller.postemail)
routes.get("/:id",passwordcontroller.getrest)

routes.get('/updatepassword/:resetpasswordid',passwordcontroller.updatepassword)

module.exports=routes