import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null); // Initialize as null
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details.");
      });
  }, [productId]);

  if (error) {
    return <div className="container text-center text-red-500 mt-8">{error}</div>;
  }

  if (!product) {
    return <div className="container text-center mt-8">Loading product details...</div>;
  }

  return (
    <div className="ProductDetailsPage container mt-8"> {/* Added margin-top */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md"> {/* Added card styling */}
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img src={product.image} alt={product.title} className="max-w-md mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-blue-500 font-bold mb-2">Price: ${product.price}</p>
        <p className="text-gray-800">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;