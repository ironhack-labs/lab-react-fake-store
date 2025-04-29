import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log('Error getting products from the API...', error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Link to={`/product/details/${product.id}`}>View Details</Link> 
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
