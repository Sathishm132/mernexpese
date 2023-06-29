const express=require("express");
const expensecontroller=require("../controller/expensecontroller")
const router=express.Router()
const midlware=require("../middleware/token")
router.get("/",midlware,expensecontroller.getexpense)
router.post("/",midlware,expensecontroller.postexpense)
router.delete("/:id",expensecontroller.deleteexpense)
router.put("/:id",expensecontroller.editexpense)
module.exports=router