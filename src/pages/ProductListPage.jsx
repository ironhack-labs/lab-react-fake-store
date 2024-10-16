// src/pages/ProductListPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

function ProductListPage() {
  const [products, setProducts] = useState([]); // State to hold the list of products
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch the list of products when the component mounts
  useEffect(() => {
    // Make the HTTP request to fetch the products
    axios
      .get("https://fakestoreapi.com/products") // API endpoint to fetch products
      .then((response) => {
        setProducts(response.data); // Set the fetched products to state
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        setError(error.message); // Capture any errors
        setLoading(false); // Set loading to false if an error occurs
      });
  }, []); // Empty dependency array means this runs only once on mount

  // Show loading message while fetching
  if (loading) {
    return <p>Loading products...</p>;
  }

  // Show error message if an error occurred
  if (error) {
    return <p>There was an error: {error}</p>;
  }

  return (
    <div className="ProductListPage">
      <h1>Products</h1>
      <div className="product-list">
        {/* Render list of products directly */}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/details/${product.id}`}>View Details</Link> {/* Link to product details */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
