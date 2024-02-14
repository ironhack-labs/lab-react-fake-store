import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]); // Trigger effect when productId changes

  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
