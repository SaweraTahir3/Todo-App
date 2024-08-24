import './Signup.css'
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const SignUp = () => {
    let user = {
      name,
      email,
      password,
    }
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/login');

  }
  return (
    <div className='SignUp '  style={{marginTop:"4%"}}>
      <h1 className='h1'>Sign Up</h1>
      <br />
      
      <Formik>
        <Form>
          
          <Field name="firstName" values={name} className='input' placeholder="Enter a Name" onChange={(e) => setName(e.target.value)}  style={{width :"300px"}}/>
<br />
          <br />
          
          <Field name="email" values={email} placeholder=" Email" type="email" className='input' onChange={(e) => setEmail(e.target.value)}  style={{width :"300px"}} />
          <br />
          <br />

        
          <Field name="Password" values={password} placeholder="Enter a  password" className='input' type="password" 
          onChange={(e) => setPassword(e.target.value)}  style={{width :"300px"}}/>

          <br />
          <br />

          <button type="submit" className='btn' onClick={SignUp}   style={{width :"300px" ,  borderRadius: '7px' }} >

            Login
          </button>
        </Form>

      </Formik>
    </div>
  )
};
export default SignUp


