import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  const [product, setProduct] = useState({});

  // but you should use it to store the response from the Fake Store API (the product details).

  // The `productId` coming from the URL parameter is available in the URL path.
  const { productId } = useParams();
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(response);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, [productId]);

  const { image, title, price, category, description } = product;
  return (
    <div className="ProductDetailsPage">
      <div className="detail">
        <img src={image} alt="" />
        <hgroup className="detail-item">
          <p className="cat">{category}</p>
          <h1>{title}</h1>
          <div className="flex-detail">
            <p className="description">{description}</p>
            <p className="price">{price} $</p>
          </div>
          <Link to="/" className="back-button">
            Back
          </Link>
        </hgroup>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
