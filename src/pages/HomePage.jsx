import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="spacing-lg">
      <h1 className="text-center">Products</h1>
      <div className="products-grid"> {/* Ensure this class is applied */}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/details/${product.id}`} className="product-link">
              <Card title={product.title}>
                <img src={product.image} alt={product.title} className="product-image" />
                <p>{product.price} USD</p>
              </Card>
            </Link>
            <button className="btn-primary spacing-xs" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
