const expense=require("../modles/expensemodel")
exports.getexpense=(req,res)=>{
    expense.findAll({where:{
        userId:req.user.id
    }}).then((expenses)=>{
        
        res.status(200).json({allexpenses:expenses})
    }).catch((err)=>{
        console.log(err)
    })
   

}
exports.postexpense=(req,res)=>{
    expenseDate=req.body.expensedate;
    expensecategory=req.body.expensecategory;
    expenseamount=req.body.expenseamount;
    expenseDescription=req.body.expensedescription;
    

    expense.create({
        expenseDate:expenseDate,
        expensecategory:expensecategory,
        expenseamount:expenseamount,
        expenseDescription:expenseDescription

    }).then(()=>{
        res.json(req.body)
    })

}
exports.deleteexpense=(req,res)=>{
    expense.destroy({
        where:{
            id:req.params.id
        }
    })

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