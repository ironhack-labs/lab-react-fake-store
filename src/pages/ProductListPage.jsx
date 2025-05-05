// src/pages/ProductListPage.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>List of prod</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} width="100" />
              <p>{product.price} $</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
