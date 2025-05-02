import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="HomePage">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <Link to={`/product/details/${product.id}`} key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <div className="product-title">
                <h6>{product.title}</h6>
              </div>
              <div className="category">
                <p><strong>Category:</strong> {product.category}</p>
              </div>
              <div className="product-description">
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Price:</strong> ${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
