import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    console.log('System notification: Counter increment executed successfully.');
  };

  const sayWelcome = (message) => {
    alert(`Greeting received: ${message}`);
  };

  const handleSyntheticClick = (e) => {
    alert(`Synthetic Event triggered! Tag Name: ${e.target.tagName}. Message: "I was clicked"`);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>React Event Telemetry</h2>
      
      <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>Multi-Invoke Counter</h3>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {counter}</p>
        <button onClick={handleIncrement} style={{ padding: '8px 16px', marginRight: '10px', cursor: 'pointer' }}>Increment</button>
        <button onClick={() => setCounter(prev => prev - 1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>Decrement</button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => sayWelcome('welcome')} style={{ padding: '10px 15px', marginRight: '10px', cursor: 'pointer', backgroundColor: '#e0e0e0', border: '1px solid #999', borderRadius: '4px' }}>
          Say Welcome
        </button>
        <button onClick={handleSyntheticClick} style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#2496ED', color: 'white', border: 'none', borderRadius: '4px' }}>
          Trigger Synthetic Event
        </button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}
export default App;
