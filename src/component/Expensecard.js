import axios from 'axios'
import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Card.css"
import { Context } from './Store/Context'

const Expensecard = (props) => {
  const {expense,setExpense}=useContext(Context)
  const deletehandler=()=>{
    const newexpense=expense.filter((element)=>(element.id!==props.id))
    axios.delete(`http://localhost:5000/api/${props.id}`);
  
    setExpense(newexpense)
   console.log(newexpense)
  }
  const edithandler=()=>{}
  return (
    <div className='card'>
        <ul >
          <li><p>{props.date}</p></li>
          <li><p>{props.category}</p></li>
          <li><p>{props.amount}</p></li>
          <li><p>{props.description}</p></li>
         <li><NavLink to={`/editexpense/${props.id}`} className=' btn btn-primary'>edit</NavLink></li> 
         <li> <Button onClick={deletehandler}>delete</Button></li>
        </ul>
    </div>
  )
}

export default Expensecard