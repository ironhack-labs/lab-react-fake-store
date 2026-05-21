import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CartPage() {
  const [cartDetails, setCartDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cartUrl = "https://fakestoreapi.com/carts/1";
    const productsUrl = "https://fakestoreapi.com/products";

    Promise.all([axios.get(cartUrl), axios.get(productsUrl)])
      .then(([cartResponse, productsResponse]) => {
        const cartData = cartResponse.data;
        const allProducts = productsResponse.data;

        const detailedProducts = cartData.products.map((cartItem) => {
          const productInfo = allProducts.find((p) => p.id === cartItem.productId);
          return {
            ...productInfo,
            quantity: cartItem.quantity,
          };
        });

        setCartDetails(detailedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading your shopping cart... 🛒</p>;

  return (
    <div className="CartPage" style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>
      
      {cartDetails.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {cartDetails.map((item) => (
            <div key={item.id} className="cart-item" style={{ display: "flex", alignItems: "center", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
              <img src={item.image} alt={item.title} style={{ width: "80px", marginRight: "20px" }} />
              <div style={{ flexGrow: 1 }}>
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p><strong>Subtotal: ${(item.price * item.quantity).toFixed(2)}</strong></p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to="/" style={{ display: "inline-block", marginTop: "20px" }}>
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export default CartPage;
