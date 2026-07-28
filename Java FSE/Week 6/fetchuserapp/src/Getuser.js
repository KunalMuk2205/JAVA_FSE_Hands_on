import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      const userData = data.results[0];
      this.setState({ user: userData, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) return <p style={{ textAlign: 'center', padding: '20px' }}>Retrieving secure user identity...</p>;
    if (error) return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;

    return (
      <div style={{ border: '2px solid #8A2BE2', borderRadius: '15px', padding: '25px', width: '350px', margin: '40px auto', textAlign: 'center', fontFamily: 'Arial', backgroundColor: '#fafafa', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#8A2BE2', marginBottom: '20px' }}>User Telemetry</h2>
        <img 
          src={user.picture.large} 
          alt="User avatar" 
          style={{ borderRadius: '50%', width: '120px', height: '120px', border: '3px solid #8A2BE2', marginBottom: '15px' }}
        />
        <h3>
          {user.name.title} {user.name.first} {user.name.last}
        </h3>
        <p style={{ color: '#666', fontSize: '15px' }}>{user.email}</p>
      </div>
    );
  }
}
export default Getuser;
