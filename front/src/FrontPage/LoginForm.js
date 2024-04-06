

import React, { useState } from 'react';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import './Login.css'
function LoginForm( props) {

  const[token,setToken]=useState("");
    const navigate=useNavigate();
    let setIsloggeIn=props.setIsloggeIn;
  const [hidePassword, setHidePassword] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
 

    event.preventDefault();
    try {
      const saveResponse = await fetch(`${window.location.origin}/api/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });

      if (saveResponse.status === 200) {
        const responseData = await saveResponse.json();

        const { token } = responseData;

        setToken(token);
        // console.log("token again",token);
        localStorage.setItem("token",token);

        //=============================
        setIsloggeIn(true);
        toast.success('Login successful');
        console.log('Printing login data', loginFormData);
        
        navigate('/Dashboard'); // Uncomment this line if you want to navigate
      } else {
        console.log('Error during login');
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login.');
    }
  };



  return (
    <div className='main'>
      <form method="POST" onSubmit={handleSubmit}>
        <label>
        {/* <br/>       */}

          <p>Email</p>
          {/* <br/>       */}
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={loginFormData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <p>Password</p>
          {/* <br> */}

          <input
            type={hidePassword ? 'text' : 'password'}
            placeholder="Enter Your Password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
          />
          <span className='span' onClick={() => setHidePassword(!hidePassword)}>
            {hidePassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
          <span className='span' >Forget Password</span>
        </label>
        <div>

        <button className="-btn">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
