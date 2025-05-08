import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  if (!cart) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.products.map((item, index) => (
          <li key={index}>
            Product ID: {item.productId}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
