import React from 'react';

const IndianPlayers = ({ players }) => {
  const topPlayers = players.filter(p => p.score >= 70);
  
  const oddTeam = [];
  const evenTeam = [];
  players.forEach((p, idx) => {
    if ((idx + 1) % 2 !== 0) {
      oddTeam.push(p.name);
    } else {
      evenTeam.push(p.name);
    }
  });

  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Hardik Pandya'];
  const RanjiTrophy = ['Sarfaraz Khan', 'Abhimanyu Easwaran', 'Yash Dayal'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h3>High Scorers (>= 70)</h3>
      <ul>
        {topPlayers.map((p, idx) => (
          <li key={idx}>{p.name} ({p.score})</li>
        ))}
      </ul>
      
      <h3>Team Split (Destructured by index)</h3>
      <p><strong>Odd Team:</strong> {oddTeam.join(', ')}</p>
      <p><strong>Even Team:</strong> {evenTeam.join(', ')}</p>
      
      <h3>Merged T20 & Ranji Squad</h3>
      <p>{mergedPlayers.join(', ')}</p>
    </div>
  );
};
export default IndianPlayers;
