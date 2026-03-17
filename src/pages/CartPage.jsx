import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CartPage.css'

function CartPage() {
  const [cart, setCart] = useState(null);
  const randomNumber = Math.floor(Math.random() * 7) + 1;

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/carts/${randomNumber}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!cart) return <div className="container">Loading cart...</div>;

  return (
    <div className="CartPage container">
      <h1>Your Shopping Cart</h1>
      <p className="cart-date">Order Date: {new Date(cart.date).toLocaleDateString()}</p>

      <div className="cart-list">
        {cart.products.map((item) => {
          return (
            <div key={item.productId} className="cart-item">
              <div className="item-info">
                <span className="item-id-badge">Product ID: {item.productId}</span>
                <p className="item-quantity">Quantity: <strong>{item.quantity}</strong></p>
              </div>
              
              <div className="item-actions">
                <Link to={`/products/${item.productId}`} className="view-product-link">
                  View Product
                </Link>
                <button className="delete-btn">Remove</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <Link to="/" className="continue-shopping">← Continue Shopping</Link>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;