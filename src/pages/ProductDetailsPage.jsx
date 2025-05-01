import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        const productsDetails = response.data;
        setProduct(productsDetails);
      })
      .catch((error) => {
        console.log(error);
      }),
      [];
  });
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <h1>{product.details}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">
        <button>go back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
