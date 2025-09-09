import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/Auth';

const Login = () => {
  const navigate = useNavigate();
  const {StoreToken} = useAuth();
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
    // console.log(data);
  }
  const hs = async(e) =>{
  e.preventDefault(); 
    
    try {
      const api = "http://localhost:1056/login"
      const res = await axios.post(api , data);
      console.log("RESponse" , res.data);


      if(res.data.success){
          StoreToken(res.data.token);
  alert("Login sucess full " , res.data.username)
        navigate("/")
      }
      
    } catch (error) {
      
    }
    
    
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
      id='email' 
      value={data.email} 
      onChange={hi}/>


      <label htmlFor="password">password</label>
      <input type="password" 
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