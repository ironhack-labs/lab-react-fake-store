import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="ProductDetailspage">
      <h1>Product Details</h1>
      {product && (
        <div className="card">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
