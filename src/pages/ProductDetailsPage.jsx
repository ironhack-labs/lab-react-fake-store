import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getProductDetails() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    }
    getProductDetails();
  }, []);

  return (
    <>
      <div className="ProductDetailsPage">
        {/* Render product details here */}
        <img
          src={product.image}
          alt="Product Image"
          className="product-details-image"
        />
        <span className="product-details-category">{product.category}</span>
        <span className="product-details-title">{product.title}</span>
        <div className="product-details-info">
          <span className="product-details-description">
            {product.description}
          </span>
          <span className="product-details-price">${product.price}</span>
        </div>
      </div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </>
  );
}

export default ProductDetailsPage;
