import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const tempErrors = {};
    if (formData.name.length < 5) {
      tempErrors.name = 'Name must be at least 5 characters long';
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      tempErrors.email = 'Email must contain "@" and "." symbols';
    }
    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Validation Successful! Form submitted successfully.');
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    } else {
      alert('Validation Failed! Please fix the errors listed.');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '25px', maxWidth: '450px', margin: '30px auto', fontFamily: 'Arial', backgroundColor: '#fcfcfc' }}>
      <h2 style={{ color: '#00599c', borderBottom: '2px solid #00599c', paddingBottom: '10px' }}>Register Account</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label><strong>Name:</strong></label>
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleInputChange} 
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.name && <span style={{ color: 'red', fontSize: '14px' }}>{errors.name}</span>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label><strong>Email:</strong></label>
          <input 
            type="text" 
            name="email"
            value={formData.email} 
            onChange={handleInputChange} 
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '14px' }}>{errors.email}</span>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label><strong>Password:</strong></label>
          <input 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleInputChange} 
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.password && <span style={{ color: 'red', fontSize: '14px' }}>{errors.password}</span>}
        </div>
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: '#00599c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
