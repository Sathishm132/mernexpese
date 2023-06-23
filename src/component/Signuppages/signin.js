import React, { useRef } from 'react'
import { Button, Container, Form, NavItem } from 'react-bootstrap'
import './Signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signin = () => {
 
  const email=useRef()
  const password=useRef()
    const submithandler=(e)=>{
      e.preventDefault()
      const user={
        
        email:email.current.value,
        password:password.current.value,

      }
      axios.post("http://localhost:5000/signin",user).then(()=>{

      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div className="cover">
      <div className='form'>
          
        
        
          <Form onSubmit={submithandler}>
          <h2>Sign in</h2>
         
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"ref={email} required  placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required  ref={password} placeholder="Password" />
      </Form.Group>
      <p> Don't have an account?<Link to="/signup">click here</Link></p>
      <Button type='submit'>Sign in</Button>
    </Form>
    </div>
   
    </div>
  )
}

export default Signin