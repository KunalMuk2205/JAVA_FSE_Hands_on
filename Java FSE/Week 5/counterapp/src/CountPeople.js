import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    // Bindings
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  UpdateEntry() {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  UpdateExit() {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div style={{ border: '2px solid #2496ED', borderRadius: '10px', padding: '25px', width: '400px', margin: '30px auto', textAlign: 'center', fontFamily: 'Arial' }}>
        <h2 style={{ color: '#2496ED' }}>Mall Traffic Controller</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
          <div style={{ padding: '15px', backgroundColor: '#e8f4fd', borderRadius: '5px', width: '40%' }}>
            <h3>Entries</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#150458' }}>{this.state.entrycount}</p>
            <button 
              onClick={this.UpdateEntry}
              style={{ backgroundColor: '#2496ED', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Login
            </button>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#fde8e8', borderRadius: '5px', width: '40%' }}>
            <h3>Exits</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#d00000' }}>{this.state.exitcount}</p>
            <button 
              onClick={this.UpdateExit}
              style={{ backgroundColor: '#d00000', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CountPeople;
