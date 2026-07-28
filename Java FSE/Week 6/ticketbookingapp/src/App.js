import React, { useState } from 'react';

const flightDetails = [
  { id: 'FL101', airline: 'IndiGo', from: 'Kolkata', to: 'Delhi', price: 5500 },
  { id: 'FL202', airline: 'Air India', from: 'Kolkata', to: 'Mumbai', price: 6200 },
  { id: 'FL303', airline: 'Vistara', from: 'Kolkata', to: 'Bengaluru', price: 7800 }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ccc', paddingBottom: '15px' }}>
        <h2>StarFly Ticket Booking</h2>
        {isLoggedIn ? (
          <button 
            onClick={() => setIsLoggedIn(false)} 
            style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#d00000', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Logout
          </button>
        ) : (
          <button 
            onClick={() => setIsLoggedIn(true)} 
            style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Login
          </button>
        )}
      </header>

      {isLoggedIn ? (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#2e7d32' }}>Welcome back, User! [Authenticated Access]</h3>
          <p>You can now book tickets below.</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
            <thead>
              <tr style={{ backgroundColor: '#eeeeee' }}>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Flight ID</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Airline</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Route</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Price</th>
                <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {flightDetails.map(f => (
                <tr key={f.id}>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{f.id}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{f.airline}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{f.from} &rarr; {f.to}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>${f.price}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                    <button 
                      onClick={() => alert(`Flight ${f.id} booked successfully!`)}
                      style={{ backgroundColor: '#2e7d32', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '3px', cursor: 'pointer' }}
                    >
                      Book Ticket
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#d00000' }}>Logged In: Guest Mode</h3>
          <p>Please log in to purchase tickets. Currently viewing available flights:</p>
          <ul>
            {flightDetails.map(f => (
              <li key={f.id} style={{ margin: '10px 0', fontSize: '16px' }}>
                <strong>{f.airline}</strong> ({f.id}) - Route: {f.from} to {f.to} | Price: ${f.price} 
                <span style={{ color: '#d00000', marginLeft: '15px', fontSize: '14px', fontWeight: 'bold' }}>[Login to Book]</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;
