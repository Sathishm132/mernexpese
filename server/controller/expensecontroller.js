const expense=require("../modles/expensemodel");
const sequelize=require("../config/databseconfig")
exports.getexpense=(req,res)=>{
    expense.findAll({where:{
        userId:req.user.id
    }}).then((expenses)=>{
        
        res.status(200).json({allexpenses:expenses})
    }).catch((err)=>{
        console.log(err)
    })
   

}
exports.postexpense=async(req,res)=>{

    let t
   const {expensedate,expensecategory,expenseamount,expensedescription}=req.body
    
   
    const totalamount=Number(req.user.totalamount)+Number(expenseamount)
     try{
       t=  await sequelize.transaction();
       await req.user.update({totalamount:totalamount},{transaction:t})
      
       await req.user.createExpense({
        expenseDate:expensedate,
        expensecategory:expensecategory,
        expenseamount:expenseamount,
        expenseDescription:expensedescription,
       
    }, {transaction:t}   
    )
    await res.json(req.body)
    await t.commit()

     }catch(err){
        console.log(err)
        res.status(500).json({"err":err})
        if(t){

            await t.rollback()
        }

       
     }
    
    
    
    
  

}
exports.deleteexpense=async(req,res)=>{
    const deleteexpense=await expense.findAll({
        where:{
            id:req.params.id
        }
    })
  const  upddatedtotal= await Number(req.user.totalamount)-Number(deleteexpense[0].expenseamount)
  await  console.log(deleteexpense)
  
    await req.user.update({totalamount:upddatedtotal})
   await expense.destroy({
        where:{
            id:req.params.id
        }
    })
    await res.json("sucsess")

}
exports.editexpense=(req,res)=>{
     expense.update({  expenseDate:req.body.expensedate,
        expensecategory:req.body.expensecategory,
        expenseamount:req.body.expenseamount,
        expenseDescription:req.body.expensedescription}, {
        where: {
          id: req.params.id
        }

      }).then(()=>{
        console.log("sucsess")
        res.status(200).json("JDQDG")
      })
    
}