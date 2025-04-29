import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

function ProductDetailsPage({ addToCart }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((e) => {
        console.error('Error fetching product:', e);
        setProduct(null);
      })
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <img className="product-image" src={product.image} alt={product.title} />
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-category">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="product-price">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;