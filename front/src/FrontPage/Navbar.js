import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import "./Navbar.css";


function Navbar(props){
    let setIsloggeIn=props.setIsloggeIn;
    let isloggedIn=props.isloggedIn;

    const navigate=useNavigate();
    const navigateToSport=()=>{
        navigate("/cricket")
    }
    return(
        <div className="navbar">
            <div className="logo">
                {/* <Link to={"/"} > */}
                {/* <img className="item-center" height={250} width={250} src={logo}></img> */}
                <h1  >ScoreSpeake</h1>
                {/* //here ============================================================*/}
                {/* </Link> */}
            </div>

            
            <div className="title-name" >
                <ul className="flex item-center text-center py-auto gap-3">
                
                  
                    <li >
                   <Link to="/" setIsloggeIn={setIsloggeIn}  className="text-white font-bold">Home</Link>


                    </li>
                   
                    <li >
                   <a  onClick={navigateToSport} setIsloggeIn={setIsloggeIn}  className="text-white font-bold">Sports</a>


                    </li>

                        <li >
                   <Link to="/Dashboard" setIsloggeIn={setIsloggeIn}  className="text-white font-bold">DashBoard</Link>


                    </li>
                    <li >
                    <Link to="/sports" setIsloggeIn={setIsloggeIn} className="text-white font-bold" >All Games</Link>


                    </li>
                </ul>
            </div>

            <div className="buttons">
            {/* !isloggedIn && */}
                <button>
                    {
                !isloggedIn &&(

                    <Link 
                    to="/Login" setIsloggeIn={setIsloggeIn} >Login</Link>
                    )}
                </button>
                
                <button>
                {
                !isloggedIn &&(
                <Link to="/signup"  setIsloggeIn={setIsloggeIn} >Signup</Link>
                )}
                </button>
                
                <button onClick={()=>{
                    setIsloggeIn(false)
                    toast.success("Loged Out")
                }} >
                {
                isloggedIn &&(
                <Link to="/"  setIsloggeIn={setIsloggeIn} >LogOut</Link>
                )}
                </button>
                
                <button>
                {
                isloggedIn &&(
                <Link to="/dashboard"  setIsloggeIn={setIsloggeIn}>Dashboard</Link>
                )}
                </button>
            </div>



        </div>
    )
}
export default Navbar;