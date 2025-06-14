
import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  return (
    <div className="CartPage">
      <h1>Shopping Cart 🛒</h1>
      {!cart ? (
        <p>Loading cart...</p>
      ) : (
        <>
          <p><strong>Cart ID:</strong> {cart.id}</p>
          <p><strong>User ID:</strong> {cart.userId}</p>
          <p><strong>Date:</strong> {cart.date}</p>
          <ul>
            {cart.products.map((item, index) => (
              <li key={index}>
                <strong>Product ID:</strong> {item.productId} | <strong>Quantity:</strong> {item.quantity}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CartPage;
