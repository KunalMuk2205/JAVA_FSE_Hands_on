import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeesList from './EmployeesList';

const mockEmployees = [
  { id: 1, name: 'Aravind Swamy', role: 'Solutions Architect', email: 'aravind@cognizant.com' },
  { id: 2, name: 'Sanjana Mandal', role: 'AI/ML Pipeline Engineer', email: 'sanjana@cognizant.com' },
  { id: 3, name: 'Preeti Nair', role: 'Frontend Engineer', email: 'preeti@cognizant.com' }
];

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h2>Employee Workspace Dashboard</h2>
        <button 
          onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} 
          style={{ padding: '8px 16px', marginBottom: '20px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Toggle System Theme (Current: {theme.toUpperCase()})
        </button>
        
        <EmployeesList employees={mockEmployees} />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
