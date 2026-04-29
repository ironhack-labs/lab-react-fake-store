import React, { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {

    axios
      .get("https://fakestoreapi.com/carts/1")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!cart) return <p>Cart Loading </p>;

  return (
    <div>
      <h2>My Cart</h2>

      <p>User ID: {cart.userId}</p>
      <p>Date: {cart.date}</p>

      <ul>
        {cart.products.map((item, index) => (
          <li key={index}>
            Product ID: {item.productId} | Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;