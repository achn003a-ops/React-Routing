import React from 'react'
import Header from '../components/Header'
import {useNavigate} from "react-router-dom"

const Login = () => {
     const navigate = useNavigate()
    function handlelogin(){
       navigate("/")

        }
    
  return (
    <>
    <Header />
    <form>
        <input type="text" name="username" placeholder="Enter Username" />
        <br /><br />
        <input type="password" name="password" palceholder="Enter Password" />
        <br /><br />
        <button type="submit" onclick={handlelogin}>Submit</button>
    </form>
      
    </>
  )
}

export default Login
