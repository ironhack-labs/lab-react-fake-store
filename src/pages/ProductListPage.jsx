import { useState } from "react";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(async (response) => {
      if (response.status == 200) {
        const productList = await response.json();
        setProducts(productList);
      }
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])


  return (
    <div className="ProductListPage">
      <h1>Products</h1>
      <ul>
        {/* Render list of products here */

          products.map(product => (
            <li key={product.id}>
              <Link to={`/product/details/${product.id}`}>
                {product.title} - ${product.price}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ProductListPage;
