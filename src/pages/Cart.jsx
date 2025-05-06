import { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCart() {
      try {
        const cartResponse = await axios.get("https://fakestoreapi.com/carts/1");
        const productIds = cartResponse.data.products.map((item) => item.productId);
        const productPromises = productIds.map((id) =>
          axios.get(`https://fakestoreapi.com/products/${id}`)
        );

        const productsData = await Promise.all(productPromises);
        setCartItems(productsData.map((response) => response.data));
      } catch (err) {
        console.error("Error fetching cart:", err);
        setError("Error al cargar el carrito");
      }
    }

    fetchCart();
  }, []);

  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
