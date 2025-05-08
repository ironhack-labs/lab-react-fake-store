import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
  }, []);

  return (
    <>
      <div className="ProductDetailsPage">
        {/* Render product details here */}
        <img src={product.image} />
        <h1>{product.title}</h1>
        <div>{product.category}</div>
        <div>{product.price}€</div>
        <div>{product.description}</div>
      </div>

      <Link to="/">Back to Homepage</Link>
    </>
  );
}

export default ProductDetailsPage;
