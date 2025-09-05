import React, { useState } from 'react'

const Login = () => {
  const [data , setData] =  useState({
    email:"",
    password:""
  });

  const hi = (e) =>  {
    const {name , value} = e.target 

    setData({
      ...data,
      [name]:value
    })
    console.log(data);
  }
  const hs = (e) =>{
  e.preventDefault(); 
    alert(data);
    console.log(data);
    
  }
  return (
   <>
   <div>
    <div>
      <h1>Login Form</h1>
    </div>
    <form onSubmit={hs} >
      <div>
        <label htmlFor="email">email</label>
      <input type="text" 
      name='email'
       required 
       placeholder='Enter your email' 
      id='name' 
      value={data.email} 
      onChange={hi}/>


      <label htmlFor="password">password</label>
      <input type="text" 
      name='password'
       required 
       placeholder='Enter your password' 
      id='password'  
      value={data.password}
      onChange={hi}/>

      <button type='submit'>Login Here </button>

      </div>
    </form>
   </div>
   
   </>
  )
}

export default Login