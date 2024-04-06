import {React,createContext }from 'react';
import { useState } from 'react';

    
export const AppContext=createContext('');

export function AppContextProvider({children}){

    const [userId,setUserId]=useState("")
    const [inputData,setInputData]=useState({
            series:"Gully Cricket Championship",
            // teamA:"TeamA",
            // teamB:"TeamB",
            teamA:{
                name:"TeamA",
                score:0,
                over:0},
            teamB:{
                name:"TeamB",
                score:0,
                over:0 },

            totalOver:"",
        })

        const value={
            userId,
            setUserId,
            inputData,
            setInputData,
        }

        return<AppContext.Provider value={value}>
               {children}
        </AppContext.Provider>
}
