const router=require("express").Router()
const premiumcontroller= require("../controller/premiumcontroller")
router.get("/",premiumcontroller.getleaderboard)
module.exports=router