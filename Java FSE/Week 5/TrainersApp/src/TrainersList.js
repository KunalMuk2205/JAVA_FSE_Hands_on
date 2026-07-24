import React from 'react';
import { Link } from 'react-router-dom';

const TrainersList = ({ trainers }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Expert Trainers Directory</h2>
      <ul style={{ fontSize: '18px', lineHeight: '2' }}>
        {trainers.map(t => (
          <li key={t.TrainerId}>
            <Link to={`/trainer/${t.TrainerId}`} style={{ color: '#00599c', textDecoration: 'none', fontWeight: 'bold' }}>
              {t.Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;
