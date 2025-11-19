import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/1") // Example cart ID
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error(err));
  }, []);

  if (!cart) return <p style={{ padding: "1rem" }}>Loading cart...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Your Cart</h1>
      <ul>
        {cart.products.map((item) => (
          <li key={item.productId} style={{ margin: "0.5rem 0" }}>
            Product ID: {item.productId} | Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Cart ID: {cart.id}</p>
      <p>User ID: {cart.userId}</p>
      <p>Date: {new Date(cart.date).toLocaleDateString()}</p>
    </div>
  );
};

export default CartPage;


