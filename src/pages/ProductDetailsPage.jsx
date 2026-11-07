import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const {productId} = useParams();


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  useEffect (() => {
    fetch (`https://fakestoreapi.com/products/${productId}`)
    .then (response => response.json())
    .then (data => {
      setProduct(data);
    })
  },[productId]);



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {product && (
      <div>
      <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} width="200" />
        <p>Category: {product.category}</p>
        <p>Price: €{product.price}</p>
        <p>{product.description}</p>
        <p>Rating: {product.rating?.rate}</p>
      </div>
    )}
    </div>
  );
}

export default ProductDetailsPage;
