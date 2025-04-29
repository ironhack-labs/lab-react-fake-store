import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())  
      .then((data) => setProducts(data))    
      .catch((error) => console.error('Error fetching products:', error));
  }, []);


  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} width="100" />
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
