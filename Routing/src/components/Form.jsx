import React from 'react'

const Form = () => {
    const[name,setName] = usestate("")
    const[message,setMessage] = usestate("")    
  return (
    <div>
      <h2>Form</h2>

      <label>Enter your name</label>
      <input type="text" placeholder="enter your name" value={name} onChange= {(e) =>setName(e.target.value)} />
      <br></br>
      <label>ENter your message</label>
      <textarea placeholder="enter your message" value={message} onChange= {(e) =>setMessage(e.target.value)} rows="5" cols="30" />
    </div>
  )
}

export default Form
