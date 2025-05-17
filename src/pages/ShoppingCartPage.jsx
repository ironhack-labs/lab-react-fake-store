import { useEffect, useState } from "react";
import axios from "axios";

export function ShoppingCartPage() {
  
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const cartId = 5;

  useEffect(() => {
    async function fetchCartData() {
      try {
        const cartResponse = await axios.get(`https://fakestoreapi.com/carts/${cartId}`);
        const productEntries = cartResponse.data.products;

        const productRequests = productEntries.map((entry) =>
          axios.get(`https://fakestoreapi.com/products/${entry.productId}`)
        );
        const productResponses = await Promise.all(productRequests);

        const detailedCart = productResponses.map((res, idx) => ({
          ...res.data,
          quantity: productEntries[idx].quantity,
        }));

        setCartProducts(detailedCart);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading cart:", err);
        setIsLoading(false);
      }
    }

    fetchCartData();
  }, [cartId]);

  return (
    <div className="CartPage">
      <h1>🛒 Your Shopping Cart</h1>
      {isLoading ? (
        <p>Loading cart...</p>
      ) : cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} width="100" />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}