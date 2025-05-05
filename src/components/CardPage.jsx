// import React, { useEffect, useState } from "react";

// // function CartPage() {
// //   const [cart, setCart] = useState([]);

// //   useEffect(() => {
// //     // Fetch mock cart data from Fake Store API
// //     fetch("https://fakestoreapi.com/carts/1")
// //       .then((res) => res.json())
// //       .then((data) => setCart(data))
// //       .catch((err) => console.error("Error fetching cart data:", err));
// //   }, []);

// //   return (
// //     <div className="CartPage">
// //       <h1>Shopping Cart</h1>
// //       <pre>{JSON.stringify(cart, null, 2)}</pre>
// //     </div>
// //   );
// // }

// // export default CartPage;
// useEffect(() => {
//   const fetchCartData = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/carts/1");
//       if (!response.ok) {
//         // Handle HTTP errors explicitly
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setCart(data); // Update state with fetched data
//     } catch (error) {
//       console.error("Error fetching cart data:", error); // Log any errors
//     }
//   };

//   fetchCartData(); // Call the async function
// }, []);

import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartData, setCartData] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Helper function to fetch a product by ID
  const fetchProduct = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (!response.ok) {
        throw new Error(`Error fetching product ${productId}: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error; // Allow Promise.all to handle failures
    }
  };

  // Function to fetch cart data and product details
  const fetchCart = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/1");
      if (!response.ok) {
        throw new Error(`Error fetching cart: ${response.status}`);
      }

      const cartData = await response.json();
      console.log("Cart Data:", cartData);
      setCartData(cartData);

      // Fetch product details for each product in the cart
      const productsPromises = cartData.products.map((product) =>
        fetchProduct(product.productId)
      );

      const productsResponses = await Promise.all(productsPromises);
      setProducts(productsResponses);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setError(error.message);
    }
  };

  // Run the fetchCart function on mount
  useEffect(() => {
    fetchCart();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!cartData || products.length === 0) return <p>Loading...</p>;

  // Render the cart and product details
  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      <p>
        <strong>Cart ID:</strong> {cartData.id}
      </p>
      <ul>
        {cartData.products.map((cartItem, index) => {
          const product = products[index];
          return (
            <li key={cartItem.productId} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} width="100" />
              <p>Price: ${product.price}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <p>
                <strong>Total:</strong> ${(product.price * cartItem.quantity).toFixed(2)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartPage;
