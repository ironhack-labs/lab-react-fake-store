import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */
        product ? (
          <div>
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}

export default ProductDetailsPage;
