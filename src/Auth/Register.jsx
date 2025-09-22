import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useAuth } from '../Store/Auth';


const Register = () => {
  const navigate = useNavigate();
  const   {StoreToken} = useAuth();
  const [user , setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

  const hi = async(e) =>{
    // console.log(e);
    let {name , value} = e.target

    setUser({
      ...user,
      [name]:value,
    })
  

  }
  const hs = async (e) => {
  e.preventDefault();   
       
  console.log(user);
 try {
 const api = "http://localhost:1056/registration";
 const res = await axios.post(api , user);
 console.log("Response " ,res.data);

 if(res.data.success){
  StoreToken(res.data.token)
  
  
  alert("Registration sucess full " , res.data.username)
  navigate("/login")
 }

} catch (error) {
 console.error("Error:", error.response ? error.response.data : error.message);

}
}

  return (
    <>
    <section>
        <main>
            <div className="section-registration">
                    <div className="grid-to-grid-cols">
                        <div className="registratration-immg">
                            <img src="img" alt="" />
                        </div>
                        <div className="registration-form">
                            <h1 className='main-heading'>Registration Form</h1>
                            <br />
                            <form onSubmit={hs} >
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" name='username'
                                    value={user.username}
                                     placeholder='Enter your username' 
                                     id='username'
                                      required 
                                      onChange={hi} />

                                      <label htmlFor="email">email</label>
                                    <input type="email" name='email'
                                    value={user.email}
                                     placeholder='Enter your emaile' 
                                     id='email'
                                      required 
                                      onChange={hi} />

                                      <label htmlFor="phone">phone</label>
                                    <input type="number" name='phone'
                                    value={user.phone}
                                     placeholder='Enter your phone' 
                                     id='phone'
                                      required 
                                      onChange={hi}  />

                                      <label htmlFor="password">password</label>
                                    <input type="password" name='password'
                                    value={user.password}
                                     placeholder='Enter your password' 
                                     id='password'
                                      required 
                                      onChange={hi}
                                       />
                                </div>
                                <br />

                                <button className='btn-btn-submit' type='submit'
                                >Register Now</button>
                            </form>
                        </div>
                    </div>
            </div>
        </main>
    </section>
    
    
    </>
  )
}

export default Register