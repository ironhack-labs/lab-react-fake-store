import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "../style/ProductDetailPage.module.css";

function ProductDetailsPage() {
  const navigate = useNavigate();
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  const { productId } = useParams();
  // You can access it with the `useParams` hook from react-router-dom.

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate("/"); // Navigates back to the home screen
  };

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  return (
    <div className={classes.ProductDetailsPage}>
      <div>
        <img src={product.image} alt={product.title} />
        <div className={classes.ProductDetailText}>
          <p className={classes.ProductDetailTextCategory}>
            {product.category}
          </p>
          <h3>{product.title}</h3>
          <div className={classes.ProductDetailTextDescription}>
            <p>{product.description}</p>
            <p className={classes.ProductDetailTextDescriptionPrice}>
              ${product.price}
            </p>
          </div>
        </div>
        <button onClick={handleBackClick} className={classes.BackButton}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
