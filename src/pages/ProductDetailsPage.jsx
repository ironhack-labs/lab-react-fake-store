import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  // Access the productId from the URL parameters
  const { productId } = useParams();

  useEffect(() => {
    // Fetch the product details when the component mounts or when productId changes
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        // Handle success
        setProduct(response.data); // Save the response data in the state
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data: ", error);
      });
  }, [productId]); // The effect will run every time the productId changes

  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width="200" />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
