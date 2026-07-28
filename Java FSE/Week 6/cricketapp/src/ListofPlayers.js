import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <div>
      <h3>All Players List</h3>
      <ul>
        {players.map((p, idx) => (
          <li key={idx}><strong>{p.name}</strong> - Score: {p.score}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListofPlayers;
