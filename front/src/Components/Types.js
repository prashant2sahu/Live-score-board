import React from 'react';
import cricket from "../img/Cricket.png";
import Football from "../img/Football.png";
import { useNavigate } from 'react-router-dom';
import "./Types.css"

function Types() {

    const navigate=useNavigate();

    const navigateToCricket=()=>{
        navigate("/cricket")
    }
    
    return (<div>
            <div className='types'>
                <div className='image'>
                    <img src={cricket}  alt='Cricket ka Banner h bhai'></img>
                </div>
                <div className='types-dis'> 
                <h1 >Cricket</h1>

                <p>lorem23
                    hdlfh a dfhsflskhj flaf k alf sd fs sk i am ag good  player in this world lowden bhojyam angen ghat;yam 
                    naynem batram jay shree ram bolo bajrang wali ki jay shree ram janki baithe h mere sheene me shree janki merea bharat ka baccha bachcaha jay shree ram bolega ja shree ram \
                    tere hawale kar duiya deva deva om deva deva namah namo namah mansoos tujhko mene kiya jo tune chuaa o  ;oooo deva deva om deva deva namah namoh namh h
                </p>
                <button  className='btn'  onClick={navigateToCricket} >Start</button>
                </div>
            </div>

            <div className='types'>
                <div className='image'>
                    <img src={Football}  alt='Cricket ka Banner h bhai'></img>
                </div>
                <div className='types-dis'> 
                <h1>Football</h1>
                <p>
                {/* l/orem23
                    hdlfh a dfhsflskhj flaf k alf sd fs sk i am ag good  player in this world lowden bhojyam angen ghat;yam 
                    naynem batram jay shree ram bolo bajrang wali ki jay shree ram janki baithe h mere sheene me shree janki merea bharat ka baccha bachcaha jay shree ram bolega ja shree ram \
                    tere hawale kar duiya deva deva om deva deva namah namo namah mansoos tujhko mene kiya jo tune chuaa o  ;oooo deva deva om deva deva namah namoh namh h */}
                    Comming soon
                </p>
                <button className='btn'>Start</button>
                </div>
            </div>
    </div>
    );
}

export default Types;