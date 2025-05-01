import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to fetch product details. Please try again later.");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading product details...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Product Details</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: "200px", marginBottom: "20px", objectFit: "contain" }}
        />
        <h2>{product.title}</h2>
        <p
          style={{
            backgroundColor: "#eee",
            display: "inline-block",
            padding: "5px 10px",
            borderRadius: "5px",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          {product.category}
        </p>
        <p style={{ fontWeight: "bold", fontSize: "1.5em", color: "#007bff" }}>${product.price}</p>
        <p style={{ color: "#777", margin: "20px 0" }}>{product.description}</p>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
