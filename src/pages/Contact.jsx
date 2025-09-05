import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formdata , setFormdata] = useState({
    username:"",
    email:"",
    message:""
  });

  const hi = (e) =>{
    const {name , value } = e.target ;
    setFormdata({
      ...formdata,
      [name]:value
    })

  }

  // on submit

  const hs = async (e) =>{
    e.preventDefault()
    console.log(formdata);
    
    
  }
  return (
    
   <>
   <section>
    <div>
      <h1>
         Contact US 
      </h1>
      <div>
        <div>
          <img src="45" alt="img" />

        </div>

        <section>
          <form  onSubmit={hs}>
            <div>
              <label htmlFor="Username">Username</label>
              <input type="text" name="username" id="username" required placeholder='Enter ur Username'  value={formdata.username} onChange={hi} />
              <br />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required placeholder='Enter ur email' value={formdata.email} onChange={hi} />
              <br />
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"  value={formdata.message} onChange={hi}></textarea>
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>

            </div>
          </form>
        </section>
      </div>
      </div>
    <section>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469401.4976402898!2d77.405891!3d23.19941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1757094845303!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</section>

      </section>   
   
   </>
  )
}

export default Contact