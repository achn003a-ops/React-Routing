import React from 'react'
import {NavLink} from "react-router-dom"
function Header() {
  return (
    <>
    <nav style={{
        display: "flex",
        gap: "40px"
    }}>
        
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/products">Products</NavLink>
      

      </nav>
    </>
  )
}

export default Header