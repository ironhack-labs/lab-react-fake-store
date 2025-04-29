import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);   
        setLoading(false);   
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [productId]);  

  
  if (loading) return <p>Loading...</p>;

  
  if (!product) return <p>Product not found.</p>;

 
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
