import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`,
      );

      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  if (isLoading) {
    return <div className="ProductDetailsPage loading-state">Loading....</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <div className="details-shell">
        <div className="details-image-panel card">
          <img
            className="details-image"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="details-content">
          <span className="details-badge">Product ID #{productId}</span>
          <h1 className="details-title">{product.title}</h1>
          <div className="details-meta">
            <span className="details-category">{product.category}</span>
            <span className="details-price">${product.price}</span>
          </div>
          <p className="details-description">{product.description}</p>
          <Link to="/" className="btn-secondary details-back-button">
            Back to list
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
