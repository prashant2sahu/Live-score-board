import React from 'react';
import {BiSolidHide,BiSolidShow} from 'react-icons/bi'
import { useState ,useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// require("dotenv").config();
import './Login.css'

function SignupForm(kuchbhi){

    const navigate=useNavigate();
    let setIsloggeIn=kuchbhi.setIsloggeIn;
    
    const [hide,setHide]=useState(false)
    const [loginFormData, setloginFormData]=useState({
        email:"",
        password:"",
        // firstName:"",
        name:"",
        // lastName:"",
        confirmPassword:""

    })
    function ChangeHandler(event){
        // prev
        setloginFormData(prev=>({
            ...prev,
            [event.target.name]:event.target.value
        }
        ))
        // console.log(loginFormData);

    }
    async function submitHandler(event){
        console.log("login form data",loginFormData)

        event.preventDefault();
            if(loginFormData.password !== loginFormData.confirmPassword){
                toast.error("Password is not same")
                return;
            }
                
            // }


            // const savedUserResponse = await fetch("/api/v1/user", 

            const savedUserResponse = await fetch(`${window.location.origin}/api/v1/user`, 

                 {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ ...loginFormData }),
                }
              );

        
            if(savedUserResponse.status==200){
                console.log("FORM RESPONSE......", savedUserResponse);
                setIsloggeIn(true);
                // console.log("Printing Signupdata");
                // console.log(loginFormData)
                toast.success("Signup Successfully")
                navigate('/dashboard')
            }
            else{
                console.log("error h guys");
                // console.log(error);
               
            }
            // useEffect({
                // submitHandler()
            // },[])
        }
    return ( <div className='main'>

     
        <form method="POST" onSubmit={submitHandler}>
            <div>
        <label>
            <p>
            Name
            </p>
            <input type='text' placeholder='Enter Your Enter your First Name' name='name' onChange={ChangeHandler} />
        </label>
        {/* <label>
            <p>
            Last Name
            </p>
            <input type='text' placeholder='Enter Your Enter your Last Name' name='lastName' onChange={ChangeHandler} />
        </label> */}
        </div>

        <div>
        <label>
            <p>
            Email
            </p>
            <input type='email' placeholder='Enter Your Email' name='email' onChange={ChangeHandler} />
        </label>

        </div>
   <div>
        <label> <p>
            password
            </p>
            <input type={hide?'text' :'password'} placeholder='Password' name='password' onChange={ChangeHandler} />
            <span className='span' onClick={()=>setHide(!hide)}> {hide?(<BiSolidHide/>):(<BiSolidShow/>) }</span>
        </label>
        <label> <p>
          Confirm password
            </p>
            <input type={hide?'text' :'password'}  placeholder='Confirm Password' name='confirmPassword' onChange={ChangeHandler} />
            <span className='span' onClick={()=>setHide(!hide)}> {hide?(<BiSolidHide/>):(<BiSolidShow/>) }</span>
        </label>

        </div>
        <button className="-btn">Create Account</button>
        </form>
    </div>
    
    );
}

export default SignupForm;

