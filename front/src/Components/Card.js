
import React from 'react';
import "./Card.css";
function Card(props) {
    setInterval(() => {
  const teamInfo = props.info;
        
    }, 1000);
  const teamInfo = props.info;


  if (!teamInfo) {
    return <p>Loading...</p>;
  }


  return (
    <div className='each-display'>
          <p className='series'>{teamInfo.series}</p>
      <div className='both-team'>
        {/* hello ji */}
        <div className='teamA'>
          <h1>{teamInfo.teamA.name} :{teamInfo.teamA.score}</h1>
          <p>{teamInfo.teamA.over}-({teamInfo.totalOver}.0)</p>
        </div>

        <div className='teamB'>
          <h1>{teamInfo.teamB.name} :{teamInfo.teamB.score}</h1>
          <p>{teamInfo.teamB.over}-({teamInfo.totalOver}.0)</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
