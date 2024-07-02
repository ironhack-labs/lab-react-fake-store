import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // The empty array means this effect runs only once when the component mounts.

  // Function to extract first 10 words from a string
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="ProductListPage">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="max-w-4xl mx-auto">
        {products.map(product => (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center cursor-pointer">
              <div className="w-1/4">
                <img className="w-full rounded-lg" src={product.image} alt={product.title} />
              </div>
              <div className="w-3/4 pl-4">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">{product.category}</p>
                <p className="text-gray-700 mb-4">{truncateDescription(product.description)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
