import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CartPage() {
  const [cart, setCart] = useState([]); 

  const { cartId } = useParams(); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => response.json())
      .then((data) => setCart(data[0].products));
  }, [cartId]);

  return (
    <div className="CartPage">
      <h1>Your Shopping Cart</h1>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((cartProduct) => (
            <div key={cartProduct.productId} className="cart-Product">
              <img src={cartProduct.image} alt={cartProduct.productId} />
              <p>Product: {cartProduct.productId}</p>
              <p>Quantity: {cartProduct.quantity}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
