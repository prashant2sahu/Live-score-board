import React, { useState, useEffect } from 'react';
import Card from "../Components/Card";
import "../Components/Card.css";
function DashBoard() {
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const result = await fetch(`${window.location.origin}/api/v1/DashBoard`);
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const compiled = await result.json();
        setDataa(compiled.data);
        // console.log("compiled.data.data",compiled.data.data);
        // console.log("compiled",compiled);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData after component mounts
    fetchData();

    // Set up an interval to fetch data every 1000 ms
    const intervalId = setInterval(fetchData, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run useEffect only once on mount

  // console.log("dataa",dataa);
  // console.log(dataa[0].series);

  // console.log("checking",Array.isArray(dataa));
  return (
    <div className='dashboard'>
      <h1 className='dashboard-title'>Live Scores:</h1>
      { 
      dataa.map((course) => (
        <Card info={course} key={course._id} />
      ))
      }
    </div>
  );
}

export default DashBoard;
