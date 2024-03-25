import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductListPage.css";
const URL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${URL}/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to="/">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
