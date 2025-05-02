import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getProducts();
  }, []);


  return (
    <div className="ProductListPage">
      {error && <p>Error fetching products: {error.message}</p>}
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ border:'1px solid #ddd'}}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price} euros</p>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;