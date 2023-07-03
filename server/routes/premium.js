const router=require("express").Router()
const midlware=require("../middleware/token")
const premiumcontroller= require("../controller/premiumcontroller")
router.get("/",premiumcontroller.getleaderboard)
router.get("/download",midlware,premiumcontroller.download)
module.exports=router