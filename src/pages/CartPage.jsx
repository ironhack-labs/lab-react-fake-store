import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CartPage = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart details:', error);
      });
  }, [cartId]);

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.products.map((product) => (
          <li key={product.productId}>
            <p>Product ID: {product.productId}</p>
            <p>Quantity: {product.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;