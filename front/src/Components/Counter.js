import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import SpeechRecognition ,{useSpeechRecognition} from 'react-speech-recognition';
import { json } from 'react-router-dom';

import "./Cricket.css"

function Counter() {
    const {inputData,setInputData,userId}=useContext(AppContext);
    const [FirstInning,setFirstInning]=useState(true);
    // const [totalBallRemaining,setTotalBallReamining]=useState(0);
    const [ball,setBall]=useState(0);
    const [run,setrun]=useState(0);
    const [wicket,setWicket]=useState(0)
    const totalBallRemaining =inputData.totalOver *6 ;
    let totalOver=inputData.totalOver;
   
    function convertBallsToOvers(totalBalls) {
      const overs = Math.floor(totalBalls / 6); // Extract the whole number of overs
      const ballsRemaining = totalBalls % 6; // Extract the remaining balls

      return `${overs}.${ballsRemaining}`;
    }

    const updateRun =(score)=>{

      if(ball < totalBallRemaining && wicket < 10) {
        setrun(run+score);
             // if(score!==1)
        setBall(ball+1);}
        else{
          setFirstInning(false);
          setBall(0);
          setrun(0);
          setWicket(0);
          setBall(0);
          console.log("Inning completed");
        }
    }
    const updateWicket=()=>{

      if(ball < totalBallRemaining && wicket < 10) {
      
        setWicket(wicket+1);
        setBall(ball+1);
        
      }
      else{
        console.log("Inning completed");
        setFirstInning(false);
        setFirstInning(false);
          setBall(0);
          setrun(0);
          setWicket(0);
          setBall(0);

      }
    }
    const wide=()=>{
      if (ball < totalBallRemaining && wicket < 10) {
        setrun(run+1);
      }else{
        console.log("Inning completed");
        setFirstInning(false);
        setFirstInning(false);
          setBall(0);
          setrun(0);
          setWicket(0);
          setBall(0);
      }
    }
    const noBall =()=>{
      if (ball < totalBallRemaining && wicket < 10) {
        setrun(run+1);
      }
      else{
        console.log("Inning completed");
        setFirstInning(false);
        setFirstInning(false);
          setBall(0);
          setrun(0);
          setWicket(0);
          setBall(0);

      }  
    }
    const updateExtra=()=>{
      if (ball < totalBallRemaining && wicket < 10) {
         setrun(run+1);
      }
      else{
        console.log("Inning completed");
        setFirstInning(false);
        setFirstInning(false);
          setBall(0);
          setrun(0);
          setWicket(0);
          setBall(0);

      }
    }

    const [voiceScore,setVoiceScore]=useState('');
    const commands=[
        {
            command:"its *",
            callback:(para)=>{
                console.log("inside callback",para);
                setVoiceScore(para)},

        }
    ];
    // const [message, setMessage] = useState('')
    // const commands = [
    //   {
    //     command: 'I  like  *',
    //     callback: (food) => setMessage(`You: ${food}`)
    //   }]


    const { transcript } = useSpeechRecognition({commands});
    // console.log(voiceScore)

    // console.log("message is ",message);
    useEffect(() => {
      console.log("transcript:", transcript);
      console.log("voiceScore:", voiceScore);
      handleSpeechRecognition(transcript);
    }, [transcript, voiceScore]);


    if(!SpeechRecognition.browserSupportsSpeechRecognition){
        return <p>Your browser does not support speech recognition.</p>;
    }                                       

  
const handleSpeechRecognition = (command) => {
    switch (command.toLowerCase()) {
      case 'out':
        updateWicket();
        break;
      case 'zero':
        updateRun(0);
        break;
      case 'one':
        updateRun(1);
        break;
      case 'two':
        updateRun(2);
        break;
      case 'three':
        updateRun(3);
        break;
      case 'four':
        updateRun(4);
        break;
      case 'six':
        updateRun(6);
        break;
      case 'wide':
        wide();
        break;
      case 'no ball':
        noBall(); 
        break;
      case 'wicket':
        updateWicket(); 
        break;
      case 'extra':
        setrun(run+1);
        break;
      default:
        break;
    }
   
  };

const perBall=convertBallsToOvers(ball);


    setTimeout(() => {
      // console.log("hello ji im calling after 1s");
      

     if(FirstInning){

        setInputData((prev) => ({
         ...prev,
         teamA: {
           ...prev.teamA,
           score: `${run}-${wicket}`,
           over: perBall,
          },
        })
        )
        
        
        // updatingA();
        const updatingA =async()=>{
          let tempScore=inputData.teamA.score;
          let tempOver=inputData.teamA.over;
          
          const response= await fetch(`${window.location.origin}/api/v1/updateGameA`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({tempOver,tempScore,userId}), 
          })
          
        }
        updatingA();
      }
      else{

        setInputData((prev) => ({
          ...prev,
          teamB: {
            ...prev.teamB,
            score: `${run}-${wicket}`,
            over: perBall,
          },
        })
        )
              
             const updatingB =async()=>{
                let tempScore=inputData.teamB.score;
                let tempOver=inputData.teamB.over;
                
                const response= await fetch(`${window.location.origin}/api/v1/updateGameB`,{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify({tempOver,tempScore,userId}), 
                })
                
              }
              
              updatingB();
            }
    }, 1000);
     
     


      
const tempAname=inputData.teamA.name;
let tempAscore=inputData.teamA.score;
let tempAover=inputData.teamA.over;


const tempBname=inputData.teamB.name;
let tempBscore=inputData.teamB.score;
let tempBover=inputData.teamB.over;
// json.parse(tempAname);
// console.log("aajao guys",tempAname);
return ( <div className='cricket'>
        
        <div className='display'>
            <div className='current-Team'>
              <div>
                <p>Welcome to ScoreSpeake </p>
                <h1 className='score'>TeamA/B: {run}-{wicket}</h1>
                <p>Ball {perBall} -{totalOver}.0 </p>
                {/* <h1>{inputData.teamA.name}</h1>
                <h1>{inputData.teamB.name}</h1> */}
              </div>
                <div className='both-team'>

                <div className='teamA'>
                  <h1>TeamA: {tempAname} :{tempAscore}</h1>
                  <p>{tempAover} ({inputData.totalOver}.0)</p>
                  

                </div>

                <div className='teamB'>
                <h1>TeamB :{tempBname} :{tempBscore}</h1>
                  <p>{tempBover} ({inputData.totalOver}.0)</p>
                  
                </div>

                </div>
                
                {/* <p>Player 1</p>
                <p>Player 2</p>
                <p>Bowler 1</p>
                <p>Bowler 2</p> */}
            </div>
        </div>

        <div className='editor'>
          <div className='Editor-buttons'>
          <h3>ScoreSpeake Editor :</h3>
              <div>
            <button onClick={()=>updateRun(0)}>0</button>
            <button onClick={()=>updateRun(1)}>1</button>
            <button onClick={()=>updateRun(2)}>2</button>
            <button onClick={()=>updateRun(3)}>3</button>
            <button onClick={()=>updateRun(4)}>4</button>
            </div>
            <div>
            <button onClick={()=>updateRun(6)}>6</button>
            <button onClick={wide} >Wide</button>
            <button onClick={noBall}>No ball</button>
            <button onClick={updateWicket}>Wicket</button>
            <button onClick={updateExtra}>Extra</button>
        </div>

        </div>

        <div className='voice-controll'>
          <h3>Voice Controll</h3>
        <p>Transcript:  {transcript}</p>
    
        <button className='-btn2' onClick={SpeechRecognition.startListening} >Start</button>
        </div>
       </div>
    </div>);
}

export default Counter;