import React, { useContext } from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import {jwtDecode} from 'jwt-decode';
import "./Cricket.css"


function Cricket() {

    // const [userId,setUserId]=useState("")
    useEffect(() => {
        const getAuthToken = () => {
        return localStorage.getItem('token');
        };
    
        // Function to decode the JWT token
        const decodeToken = (token) => {
          try {
            return jwtDecode(token);
          } catch (error) {
            console.error('Error decoding JWT token:', error);
            return null;
          }
        };
    
        const token = getAuthToken();
        const decodedToken = decodeToken(token);
        setUserId(decodedToken.id);
        console.log("decodedToken.id",decodedToken.id);
         }, []);

    const navigate= useNavigate();
    const {inputData,setInputData,userId,setUserId}=useContext(AppContext)
    const changeHandler=(event)=>{

        setInputData((prev)=>({
                ...prev,
                [event.target.name]:event.target.value
        }
        ))
    };    

      const  submitHandler= async (event)=>{
        event.preventDefault();
        console.log(inputData);

        try{

        console.log(`/game/${userId}`);
        const savedUserResponse = await fetch(`${window.location.origin}/api/v1/game/${userId}`, 

            {
                method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...inputData }),
                
            }
            );
            console.log("every thing is okkk  222");
            
            if (savedUserResponse.ok) {
                console.log("Success: Series info created from front to backend successfully");
                navigate("/cricket/counter");
              } else {
                console.log("Error: Failed to create series info from front to backend");
              }
          
        }catch(error){
            console.log(error);
            console.log("front to back error during series info")
            
        }

    }

    return (<div className='cricket'>
       {/* <p> hello ji </p>  */}
        
        <form className='cricket-form' onSubmit={submitHandler}>
            <p>Match Creation : Please Provide the Information about the match</p>
             <label>

                <input type='text' value={inputData.series} name='series' onChange={changeHandler} id="Series" placeholder=' Enter Series name'/>

            </label>
            <br/>
            
            <label>
                <input type='text' value={inputData.teamA.name} name='teamA' id="teamA" onChange={changeHandler} placeholder='Enter Your team name'/>
            </label>
                <p>Vs</p>
            <label>
                <input type='text' value={inputData.teamB.name} name='teamB' onChange={changeHandler} id="teamB" placeholder='Enter Your team name'/>
            </label>

            <br/>
            <label>
                <input type='number' max="50" min="1" required  name='totalOver' onChange={changeHandler} id="totalOver" placeholder='Enter Total Over'/>
            </label>
            <br/>

            <button className='-btn'>Next</button>
            
        </form>
    </div>);
}

export default Cricket;