const express=require("express")
const router=express.Router()
const controller=require("../controller/logincontroller")
router.post("/",controller.postlogin)
module.exports=router;