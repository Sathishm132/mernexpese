const razor=require("razorpay")
const order=require("../modles/paymentmodel")
exports.getpaymentid=async(req,res)=>{

try{
  const instance = await new razor({
    key_id: 'rzp_test_svBJg7AJAvXa8b',
    key_secret: 'E5uPPJcHoGYXonI7uDJpVM8h',
  })
   const order = await instance.orders.create({
    "amount": 49900,
    "currency": "INR",
    "receipt": "receipt#1",
    "partial_payment": false,
    "notes": {
      "key1": "value3",
      "key2": "value2"
    }
  })
 await req.user.createOrder({
  orderid:order.id,
   paymentstatus:"pending"
})  
 await res.json({order,"key_id":instance.key_id})
}catch(err){
  res.json(err)
  
}


    
    
}
 exports.postpayment=async(req,res)=>{
  await order.update({ paymentid:req.body.payment_id,paymentstatus:"sucsess" }, {
    where: {
       orderid:req.body.order_id
    }
  })
  await req.user.update({premium:true})
  res.json("sucsess")
 }