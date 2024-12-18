import React, { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch mock cart data from Fake Store API
    fetch("https://fakestoreapi.com/carts/1")
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error("Error fetching cart data:", err));
  }, []);

  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}

export default CartPage;
