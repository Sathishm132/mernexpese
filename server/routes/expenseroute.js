const express=require("express");
const expensecontroller=require("../controller/expensecontroller")
const router=express.Router()
router.get("/",expensecontroller.getexpense)
router.post("/",expensecontroller.postexpense)
router.delete("/:id",expensecontroller.deleteexpense)
router.put("/:id",expensecontroller.editexpense)
module.exports=router