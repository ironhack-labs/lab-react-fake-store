import { useEffect, useState } from "react";
import axios from "axios";

function CartPage() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cartId = 5; // Fake cart ID

  useEffect(() => {
    async function fetchCart() {
      try {
        const cartResponse = await axios.get(
          `https://fakestoreapi.com/carts/${cartId}`
        );

        const cartData = cartResponse.data;
        

        const productIds = cartData.products.map(p => p.productId);

        const productRequests = productIds.map(id =>
          axios.get(`https://fakestoreapi.com/products/${id}`)
        );

        const productResponses = await Promise.all(productRequests);
        setProducts(productResponses.map(res => res.data));

        setLoading(false);

      } catch (error) {
        console.error("Error loading cart:", error);
        setLoading(false);
      }
    }

    fetchCart();
  }, []);

  if (loading) return <h2>Loading cart...</h2>;

  return (
    <div className="CartPage">
      <h1>Your Cart</h1>

      {products.map(product => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
