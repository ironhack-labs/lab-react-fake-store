import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 flex">
        {/* Left Column: Product Image */}
        <div className="w-1/2">
          <img src={product.image} alt={product.title} className="max-w-full rounded-lg mb-4" />
        </div>
        {/* Right Column: Product Details */}
        <div className="w-1/2 pl-8">
          <div className="mb-4">
            <span className="bg-blue-600 text-white py-1 px-2 rounded-full text-sm">{product.category}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <Link to="/" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Back to Products</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
