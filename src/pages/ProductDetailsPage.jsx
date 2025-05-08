import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="spacing-lg product-details">
      <h1 className="text-center">{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image-detail" />
      <p>{product.description}</p>
      <p>Price: {product.price} USD</p>
      <button className="btn-primary spacing-md" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailsPage;
