import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

const initialPlayers = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 72 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Rishabh Pant', score: 68 },
  { name: 'Hardik Pandya', score: 92 },
  { name: 'Ravindra Jadeja', score: 55 },
  { name: 'Ravichandran Ashwin', score: 35 },
  { name: 'Jasprit Bumrah', score: 12 },
  { name: 'Mohammed Shami', score: 8 },
  { name: 'Mohammed Siraj', score: 4 },
  { name: 'Kuldeep Yadav', score: 15 }
];

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Cricket Telemetry Hub</h2>
      <button 
        onClick={() => setFlag(!flag)} 
        style={{ padding: '10px 15px', marginBottom: '20px', cursor: 'pointer', backgroundColor: '#00599c', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Toggle View (Flag: {flag.toString()})
      </button>
      {flag ? (
        <ListofPlayers players={initialPlayers} />
      ) : (
        <IndianPlayers players={initialPlayers} />
      )}
    </div>
  );
}
export default App;
