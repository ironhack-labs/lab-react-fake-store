import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/ProductListPage.css";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Check all of our available products</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/product/details/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>

          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
