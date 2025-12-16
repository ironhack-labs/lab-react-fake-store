import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { productId } = useParams();

  const navigate = useNavigate();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!Object.keys(product).length) {
    return <div>Loading product details...</div>;
  }
  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      {/* Render product details here */}
      {product && (
        <div className="product-details-card">
          <img src={product.image} alt={product.title} />
          <div className="card-details-section">
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>
              Rating: {product.rating && product.rating.rate} (
              {product.rating && product.rating.count})
            </p>
            <div className="button-group">
              <button className="btn btn-primary">Add to Cart</button>
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
