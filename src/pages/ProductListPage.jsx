import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductListPage.css'; 

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="product-list-page">
        <h1>Products List</h1>
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-page">
        <h1>Products List</h1>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        
        <Link 
          key={product.id}
          to={`/product/details/${product.id}`}
          className="product-link"
        >
          <div className="product-card">
            <img 
              src={product.image} 
              alt={product.title}
              className="product-image"
            />

            <h3 className="product-title">{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            
            <p className="product-description">
              {product.description.substring(0, 100)}...
            </p>

            <div className="product-rating">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </div>
          </div>
        </Link>

      ))}
    </div>
  );
}

export default ProductListPage;
