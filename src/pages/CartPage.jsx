import { useState, useEffect } from "react";

function CartPage() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="CartPage">
      <h1>Cart</h1>

      <p>Cart ID: {cart.id}</p>
      <p>User ID: {cart.userId}</p>
      <p>Date: {cart.date}</p>

      <h2>Products in Cart</h2>

      {cart.products &&
        cart.products.map((product) => {
          return (
            <div key={product.productId} className="cart-product">
              <p>Product ID: {product.productId}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          );
        })}
    </div>
  );
}

export default CartPage;