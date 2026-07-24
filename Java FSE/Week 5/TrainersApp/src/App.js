import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetail from './TrainerDetail';
import { MockTrainers } from './TrainersMock';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
          <Link to="/" style={{ margin: '0 15px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link> | 
          <Link to="/trainers" style={{ margin: '0 15px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Trainers List</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={MockTrainers} />} />
          <Route path="/trainer/:id" element={<TrainerDetail trainers={MockTrainers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
