import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <>
    < Header />
    <h2>I am {params.username}</h2>


    <Footer />
      
    </>
  )
}

export default User
