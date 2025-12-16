import React, { useState, useEffect } from "react";
import '../App.css'
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  
 return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/details/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <p><strong>{product.title}</strong></p>
                <p>${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
