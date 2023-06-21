import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Expensecard from './Expensecard'
import ExpenseNavbar from './ExpenseNavbar'
import { Context } from './Store/Context'

const Allexpense = () => {
    const {expense,setExpense}=useContext(Context)

    useEffect(()=>{
        axios.get("http://localhost:5000/api").then((res)=>{
            setExpense(res.data.allexpenses)
        })
    },[])
    const expenselist=expense.map((expense)=>(<ul><Expensecard
    date={expense.expenseDate}
    category={expense.expensecategory}
    amount={expense.expensecategory}
    description={expense.expenseDescription}
    id={expense.id}
    /></ul>))
  return (
    <div>
      <ExpenseNavbar/><br/>
      <Container className='mt-3'>{expenselist}</Container></div>
  )
}

export default Allexpense