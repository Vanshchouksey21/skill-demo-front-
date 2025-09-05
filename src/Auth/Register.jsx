import React, { useState } from 'react'

const Register = () => {
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
    // console.log(user);

  }
  const hs = async (e) => {
  e.preventDefault();   
  alert(user);       
  console.log(user);
     
};

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
                                    <input type="text" name='email'
                                    value={user.email}
                                     placeholder='Enter your emaile' 
                                     id='email'
                                      required 
                                      onChange={hi} />

                                      <label htmlFor="phone">phone</label>
                                    <input type="text" name='phone'
                                    value={user.phone}
                                     placeholder='Enter your phone' 
                                     id='phone'
                                      required 
                                      onChange={hi}  />

                                      <label htmlFor="password">password</label>
                                    <input type="text" name='password'
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