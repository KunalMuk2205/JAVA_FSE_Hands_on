import React from 'react';

const Cart = (props) => {
  const { Itemname, Price } = props;
  return (
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>{Itemname}</td>
      <td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>${Price}</td>
    </tr>
  );
};

export default Cart;
