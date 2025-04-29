import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log('Error getting products from the API...', e));


  }, []);

  return (
    <div className="ProductListPage">
      <h1>Number of products: {products.length}</h1>

      {products.map((productObj) => (
        <li key={productObj.id}>
          <div className="card">
            <Link to={`/product/details/${productObj.id}`}>
              <p>Title: {productObj.title}</p>
              <p>Price: {productObj.price}</p>
              <p>Category: {productObj.category}</p>
              <img src={productObj.image} alt="Product image" />
              <h4>Rating:</h4>
              <p>Rate: {productObj.rating.rate}</p>
              <p>Count: {productObj.rating.count}</p>

            </Link>
          </div>
        </li>
      ))}
    </div>
  );
}

export default ProductListPage;
