import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    let user = {
      email,
      password,
    };
  
  localStorage.setItem("user", JSON.stringify(user));
  navigate("/Todo");
  }

return(
  <div className='Login'  style={{marginTop:"4%"}}> 
 <h1 className='h1'>Login</h1>
 <br />
    <Formik>
         <Form>
          
          <Field name="email"  values={email} className='input' placeholder=" Email" type="email"  onChange={(e) => setEmail(e.target.value)}  style={{width :"300px"}}/>
<br />
<br />

<Field name="password" values={password} className='input pass'  placeholder="pasword" type="password"   onChange={(e) => setPassword(e.target.value)}   style={{width :"300px"}}/>
<br />
<br />
          <button type="submit"  className='btn' onClick={login} >
          
            Submit
          </button>
          <br />
        </Form>
    
        </Formik>
         
  </div>
)
    };
export default Login


