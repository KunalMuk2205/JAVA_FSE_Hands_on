import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Sanjana Mandal" 
        School="VIT Bhopal University" 
        Total={285} 
        goal={300} 
      />
    </div>
  );
}

export default App;
