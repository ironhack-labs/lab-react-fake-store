// ProductDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div className="container mx-auto mt-10">
      <div className="border rounded-md p-4">
        <img src={product.image} alt={product.title} className="w-full max-h-96 object-cover" />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-lg">{product.description}</p>
        <p className="text-lg font-bold">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
