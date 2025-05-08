import { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState(null); // State to store cart data
  const [products, setProducts] = useState([]); // State to store product details
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track error

  useEffect(() => {
    const cartId = 1; // Change this to the desired cart ID or get it dynamically
    const fetchCart = async () => {
      try {
        const cartResponse = await axios.get(`https://fakestoreapi.com/carts/${cartId}`);
        setCart(cartResponse.data); // Save cart data
        const productIds = cartResponse.data.products.map(product => product.productId);

        // Fetch details for each product in the cart
        const productResponses = await Promise.all(
          productIds.map(id => axios.get(`https://fakestoreapi.com/products/${id}`))
        );
        setProducts(productResponses.map(response => response.data)); // Save product details
      } catch (err) {
        setError(err.message); // Set error message if there's an error
      } finally {
        setLoading(false); // Set loading to false once requests are complete
      }
    };

    fetchCart(); // Call the fetch function
  }, []); // Run once on mount

  // Return statements inside the function
  if (loading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>There is an Error! dude!</div>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} style={{ width: "100px" }} />
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
