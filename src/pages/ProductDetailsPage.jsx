import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style/ProductDetailsPage.css";

function ProductDetailsPage() {
  const { productId } = useParams(); // Get product id from URL parameter
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setIsLoading(false); // Set loading state to false after data retrieval (or error)
      }
    };

    fetchData();
  }, [productId]); // Dependency array ensures effect runs only when productId changes

  return (
    <div className="product-details">
      {" "}
      {/* The class name is already applied here */}
      <h1>Product Details</h1>
      {isLoading ? (
        <p>Loading product details...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="product-box">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h2>Price: ${product.price}</h2>
          <h2>Rating: {product.rating.rate}</h2>
          {/* Add styling classes or a separate CSS file for visual enhancements */}
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
