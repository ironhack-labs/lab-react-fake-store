import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();               
  const [product, setProduct] = useState(null);    // Store product details
  const [loading, setLoading] = useState(true);     // Loading state
  const [error, setError] = useState(null);         // Error state

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);     //  Save API response
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Could not load product.");
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);   // ⬅ Run again if URL changes

  // Loading screen
  if (loading) {
    return <h2 className="text-center">Loading product...</h2>;
  }

  // Error screen
  if (error) {
    return <h2 className="text-center">{error}</h2>;
  }

  // When product is loaded
  return (
    <div className="ProductDetailsPage">
      <div className="product-details-card">

        <img 
          src={product.image}
          alt={product.title}
          className="details-image"
        />

        <span className="details-category">{product.category}</span>

        <h1 className="details-title">{product.title}</h1>

        <p className="details-description">{product.description}</p>

        <h2 className="details-price">${product.price}</h2>

        <button 
          className="details-back-btn"
          onClick={() => window.history.back()}
        >
          Back
        </button>

      </div>
    </div>
  );
}

export default ProductDetailsPage;
