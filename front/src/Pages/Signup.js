import React from 'react';
// import signupImg from '../assets/signup.png'
import Template from '../FrontPage/Template';

function Signup(props) {
  let  setIsloggeIn=props.setIsloggeIn;
    return (  
        <Template
      title="Sign up With ScoreSpeake"      desc1="Build skills for today, tomorrow, and beyond."
      desc2="In the game of life, be the voice that controls your scoreboard."
    //   image={signupImg}
      formType="SignUp"
      setIsloggeIn={setIsloggeIn}
    />
    // </div>);
    )
}

export default Signup;