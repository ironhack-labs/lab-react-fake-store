import { useState, useEffect } from "react";

function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      });
  }, []);

  return (
    <div className="CartPage">
      <h1>Cart</h1>
      {cart && cart.products.map((item) => (
        <div key={item.productId}>
          <p>Product ID: {item.productId}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;