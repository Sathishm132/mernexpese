const router=require("express").Router();
const payment=require("../controller/paymmentcontoller")
const midlware=require("../middleware/token")
router.get("/",midlware,payment.getpaymentid)
router.post("/",midlware,payment.postpayment)
module.exports=router;