import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li className="card" key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
