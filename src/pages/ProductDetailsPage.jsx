import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details. Please try again later.");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]); 

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product.id) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <Link to="/" className="back-button">
        ← Back to Products
      </Link>

      <div className="product-details">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail-image"
          />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-category">Category: {product.category}</p>
          <div className="product-rating">
            Rating: {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
          </div>
          <p className="product-description">{product.description}</p>

          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
