import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !complaint) {
      alert('Please fill out both name and complaint fields.');
      return;
    }
    const refNumber = 'REF-' + Math.floor(100000 + Math.random() * 900000);
    alert(`Complaint registered successfully!\nEmployee Name: ${name}\nReference Number: ${refNumber}\nWe will address this soon.`);
    
    setName('');
    setComplaint('');
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '25px', maxWidth: '450px', margin: '30px auto', fontFamily: 'Arial', backgroundColor: '#fafafa' }}>
      <h2 style={{ color: '#d00000', borderBottom: '2px solid #d00000', paddingBottom: '10px' }}>Complaint Registry</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label><strong>Employee Name:</strong></label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            placeholder="Enter name"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label><strong>Complaint Details:</strong></label>
          <textarea 
            value={complaint} 
            onChange={(e) => setComplaint(e.target.value)} 
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', height: '100px' }}
            placeholder="Describe your issue..."
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: '#d00000', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};
export default ComplaintRegister;
