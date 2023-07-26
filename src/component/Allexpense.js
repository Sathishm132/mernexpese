import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { DeleteExpense, Editexpense } from './Expensecard'

import ExpenseNavbar from './ExpenseNavbar'
import MainComponent from './Expensepage'
import { Context } from './Store/Context'

const Allexpense = () => {
    const {expense,setExpense}=useContext(Context)
    const token=localStorage.getItem("token")
    useEffect(()=>{
        axios.get("http://localhost:5000/api",{headers:{"Authorization":token}}).then((res)=>{
            setExpense(res.data.allexpenses)
        })
    },[])

  
   
    const expensepage=(<MainComponent expenses={expense}/>)
   
    const downloadhahdler=()=>{
      axios.get("http://localhost:5000/premium/download",{headers:{"Authorization":token}}).then((response)=>{
        console.log(response.data.Url)
        const link = document.createElement('a');
    link.href = response.data.Url;
    link.target = '_blank'; // Opens the link in a new tab
    link.download = 'expense.csv'; // Set the download attribute with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
      })
    }
  return (
    <div>
      <ExpenseNavbar/><br/>
      <Container className='mt-3'>
        <ul><li><button onClick={downloadhahdler}>download</button></li></ul><br/>
        {expensepage} 
        </Container></div>
  )
}

export default Allexpense