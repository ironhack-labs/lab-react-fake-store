import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import '../App.css';

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "auto" }}
      />
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
<button className="back-button" onClick={() => navigate('/')}>Back to Main Page</button>
    </div>
  );
}

export default ProductDetailsPage;