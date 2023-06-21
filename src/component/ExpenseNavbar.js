import React from 'react'
import {Container,Nav,Navbar,}from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';



const ExpenseNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Expense tracker</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to="/">Expenses</NavLink>
            <NavLink to="/addexpense">Addexpense</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default ExpenseNavbar