import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = (props) => {
  const { Name, School, Total, goal } = props;
  const average = goal > 0 ? ((Total / goal) * 100).toFixed(2) : 0;
  
  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <div className="field"><strong>Name:</strong> <span>{Name}</span></div>
      <div className="field"><strong>School:</strong> <span>{School}</span></div>
      <div className="field"><strong>Total Marks:</strong> <span>{Total}</span></div>
      <div className="field"><strong>Goal Marks:</strong> <span>{goal}</span></div>
      <div className="field average"><strong>Average Score (Percentage):</strong> <span>{average}%</span></div>
    </div>
  );
};

export default CalculateScore;
