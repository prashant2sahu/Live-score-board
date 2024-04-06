import React from 'react';
// import loginImg from '../assets/login.png'
import Template from '../FrontPage/Template';

// setIsloggeIn={setIsloggeIn}
function Login(props) {
    let setIsloggeIn=props.setIsloggeIn
    return (
        <div  className='text-center '>
            {/* Login */}
            <Template 
              title="Welcome Back"
              desc1="Welcome back! Your scoreboard, your rules."
              desc2=" What's the score today?"
            //   image={loginImg}
              formType="login"
            //   setIsLoggedIn={setIsLoggedIn}
            setIsloggeIn={setIsloggeIn} />
        </div>
      );
}

export default Login;