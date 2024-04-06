import './App.css';
import Cricket from './Components/Cricket';
import Types from './Components/Types.js';
import Counter from './Components/Counter';
import {Routes,Route} from 'react-router-dom';
import  Home from "./Pages/Home.js";
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import Navbar from './FrontPage/Navbar.js';
import { useState } from 'react';
import DashBoard from './Pages/DashBoard.js'
function App() {
  // const [isloggedIn,setIsloggeIn]=useState(false)
  const [isloggedIn,setIsloggeIn]=useState(false);
  return (
    <div className="App">

        {/* ku br kya dekh riya h */}
        <Navbar  isloggedIn={isloggedIn} setIsloggeIn={setIsloggeIn} />

         <Routes>
        <Route path="/" element={<Home setIsloggeIn={setIsloggeIn} />}/>
        <Route path="/login" element={<Login setIsloggeIn={setIsloggeIn}/>} />
        <Route path="/signup" element={<Signup setIsloggeIn={setIsloggeIn}/>} />
        <Route path="/Dashboard" element={<DashBoard setIsloggeIn={setIsloggeIn} /> }  /> 
        <Route path="*" element={<Home setIsloggeIn={setIsloggeIn}/>}/>
        <Route path="/cricket" element={<Cricket/>} />
        <Route path="cricket/counter" element={<Counter/>} />
        <Route path="/sports" element={<Types/>} />

        </Routes> 



{/* 
      {/* <Types/> */}

        {/* <Routes>


        </Routes>  */}
    </div>
  );
}

export default App;

// "proxy": "http://localhost:22288/api/v1",
