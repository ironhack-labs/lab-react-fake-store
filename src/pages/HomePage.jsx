import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
