import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/carts/1') // Assuming cart id 1 for simplicity
      .then(response => {
        setCart(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  }, []);

  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
