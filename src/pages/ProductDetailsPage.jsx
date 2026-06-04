import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    getData();
  }, []);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products/${productId}`,
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img src={product.image} alt="Product image" />
      </div>
      <div className="product-infos">
        <h2 id="title" className="items">{product.title}</h2>
        <span id="category" className="items">{product.category}</span>
        <span id="price" className="items">${product.price}</span>
        <div className="description-container items">
          <h3><strong>Description</strong></h3>
          <p id="description">{product.description}</p>
        </div>
        <div className="product-ratings-container">
          <h3><strong>Ratings</strong></h3>
          (2)<span id="rating">★★★☆☆</span>
        </div>
        <Link className="back-btn" to="/">
         ← Back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
