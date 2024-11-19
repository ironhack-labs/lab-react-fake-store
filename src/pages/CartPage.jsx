import React, { useState, useEffect } from "react";

const CartPage = () => {
  // State to store the detailed product information
  const [cartProducts, setCartProducts] = useState([]);
  // Generate a random cart ID between 1 and 10 for demonstration purposes
  const randomCartId = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  useEffect(() => {
    // Function to fetch cart and product details
    const fetchCart = async () => {
      try {
        // Fetch the cart data from the API using the randomCartId
        const cartResponse = await fetch(
          `https://fakestoreapi.com/carts/${randomCartId}`
        );

        // Check if the response is valid
        if (!cartResponse.ok) {
          throw new Error("Failed to fetch cart data");
        }

        // Parse the cart data as JSON
        const cartData = await cartResponse.json();

        // Extract products from the cart and fetch details for each product
        const productPromises = cartData.products.map(async (item) => {
          // Fetch the product details by productId
          const productResponse = await fetch(
            `https://fakestoreapi.com/products/${item.productId}`
          );

          // Check if the product response is valid
          if (!productResponse.ok) {
            throw new Error(
              `Failed to fetch product details for ID ${item.productId}`
            );
          }

          // Parse and return the product details as JSON
          return productResponse.json();
        });

        // Wait for all product details to be fetched
        const detailedProducts = await Promise.all(productPromises);

        // Save the detailed products in the state
        setCartProducts(detailedProducts);
      } catch (error) {
        // Log any errors that occur during fetching
        console.error("Error fetching cart or product details:", error);
      }
    };

    // Call the fetchCart function when the component mounts
    fetchCart();
  }, [randomCartId]); // Re-run this effect if the randomCartId changes

  // Render the cart page content
  return (
    <div className="CartPage">
      {/* Heading for the cart page */}
      <h1>Your Cart</h1>

      {/* Check if there are products to display */}
      {cartProducts.length > 0 ? (
        <ul>
          {/* Loop through each product and render its details */}
          {cartProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: "20px" }}>
              {/* Display product image */}
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px" }}
              />
              {/* Display product title */}
              <h3>{product.title}</h3>
              {/* Display product price */}
              <p>Price: ${product.price}</p>
              {/* Display product description */}
              <p>Description: {product.description}</p>
              {/* Display product category */}
              <p>Category: {product.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        // Show a loading message while products are being fetched
        <p>Loading your cart...</p>
      )}
    </div>
  );
};

export default CartPage;
