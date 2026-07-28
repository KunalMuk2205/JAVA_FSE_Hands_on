import React from 'react';

const officeSpaces = [
  { Name: 'Premium Cyber Plaza', Rent: 75000, Address: 'Sector 5, Salt Lake, Kolkata', Image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80' },
  { Name: 'Tech Hub Co-working', Rent: 45000, Address: 'New Town, Rajarhat, Kolkata', Image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=300&q=80' },
  { Name: 'Skyline Business Center', Rent: 120000, Address: 'Park Street, Kolkata', Image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80' },
  { Name: 'Smart Workspace Solutions', Rent: 55000, Address: 'Salt Lake Sector 3, Kolkata', Image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=300&q=80' }
];

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Office Space Rental Directory</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {officeSpaces.map((office, idx) => {
          const rentColor = office.Rent < 60000 ? 'Red' : 'Green';
          return (
            <div key={idx} style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <img src={office.Image} alt={office.Name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3>{office.Name}</h3>
                <p><strong>Address:</strong> {office.Address}</p>
                <p>
                  <strong>Monthly Rent:</strong>{' '}
                  <span style={{ color: rentColor, fontWeight: 'bold', fontSize: '18px' }}>
                    ${office.Rent.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
