import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]); // Store cart data
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>

      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        Back to Shopping
      </button>
    </div>
  );
};

export default CartPage;
