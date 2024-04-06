import React from 'react';
// import frame from '../assets/frame.png'
import LoginForm from './LoginForm';
import SignupForm from './signForm';


function Template({image,desc1,desc2,title,formType,setIsloggeIn}) {
    
    
    return ( <div className='main-template'>
        <div  className='main-template2'>
            <h2>{title}</h2> 
            <p>{desc1}</p>
            <p>{desc2}</p>


            {/* {formType==="SignUp"?<SignupForm/>: <LoginForm/>} */}
        {formType === "login" ? <LoginForm setIsloggeIn={setIsloggeIn} /> : <SignupForm setIsloggeIn={setIsloggeIn} /> }

            {/* <SignupForm/> */}
            
            

            <div></div>
            <div className='or'>Or</div>
            <div></div>

            <button className='sign-btn'>
                <p >SignIn with Google</p>
            </button>

            <div>
                <img src={image}/>
                {/* <img src={frame}/> */}
                
            </div>
        </div>

    </div>);
}

export default Template;