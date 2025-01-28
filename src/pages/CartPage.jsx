// CartPage.jsx
import { useState, useEffect } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/1") // Using cart id 1 for example
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  return (
    <div className="CartPage container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item card">
            <img src={item.image} alt={item.title} className="product-image" />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
