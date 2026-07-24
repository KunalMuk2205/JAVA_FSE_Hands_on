import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  render() {
    const items = [
      { Itemname: 'Apple Macbook Pro', Price: 1499 },
      { Itemname: 'iPad Air', Price: 599 },
      { Itemname: 'iPhone 15 Pro', Price: 999 },
      { Itemname: 'AirPods Pro 2', Price: 249 },
      { Itemname: 'Apple Watch Ultra', Price: 799 }
    ];

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial', width: '500px', margin: 'auto' }}>
        <h2 style={{ color: '#00599c', textAlign: 'center' }}>Online Shopping Cart</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#00599c', color: 'white' }}>
              <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Item Name</th>
              <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <Cart key={idx} Itemname={item.Itemname} Price={item.Price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
