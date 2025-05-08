import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const baseURL = "https://fakestoreapi.com/products/";
    axios
      .get(baseURL + productId)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log("error getting list of characters...", e);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {
        <div>
          <img src={product?.image} alt="" />

          <div>{product?.category}</div>
          <div><h1>{product?.title}</h1></div>
          <div>{product?.description} <span>${product?.price}</span></div>
          <Link to="/"><button>Back</button></Link>
        </div>
      }
    </div>
  );
}

export default ProductDetailsPage;
