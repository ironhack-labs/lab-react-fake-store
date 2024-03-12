// ProductListPage.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="ProductListPage">
      <h1>List of Products</h1>

      {/* Map through the products and render each one with a Link */}
      {products &&
        products.map((product) => (
          <Link to={`/product/details/${product.id}`}>
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="smaller-image"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ProductListPage;

// title: 'test product',
// price: 13.5,
// description: 'lorem ipsum set',
// image: 'https://i.pravatar.cc',
// category: 'electronics'
