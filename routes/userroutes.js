const express=require("express")
const router=express.Router()
const usercontroller=require("../controller/usercontroller")
router.get("/",usercontroller.getuser);
router.post("/",usercontroller.postuser)
module.exports=router
