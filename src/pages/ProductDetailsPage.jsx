import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div className="detailsContainer">
        <div>{product.title}</div>
        <div>{product.category}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
      </div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
