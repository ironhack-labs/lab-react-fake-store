// ProductDetailsPage.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    // Fetch the details of the selected product from the API
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]); // The effect will run every time the `productId` changes

  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      {/* Display product details */}
      <div className="product-details">
        <img
          src={product.image}
          alt={product.title}
          className="smaller-image"
        />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
