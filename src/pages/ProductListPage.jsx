//import { useState } from "react";

// function ProductListPage() {
// The state variable `products` is currently an empty array [],
// but you should use it to store the response from the Fake Store API (the list of products).
// const [products, setProducts] = useState([]);

// To fetch the list of products, set up an effect with the `useEffect` hook:

// return (
//  <div className="ProductListPage">{/* Render list of products here */}</div>
//);
// }

// export default ProductListPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-row" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <Link
                to={`/productdetails/${product.id}`}
                className="product-title"
              ></Link>
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
                <span className="product-price">${product.price}</span>
              </div>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
