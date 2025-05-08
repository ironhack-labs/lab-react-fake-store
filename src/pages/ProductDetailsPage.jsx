/*import { useState } from "react";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here 
    </div>
  );
}

export default ProductDetailsPage; */

//-----------------------
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the product details!",
          error
        );
      });
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="details-content">
        <img
          src={product.image}
          alt={product.title}
          className="details-image"
        />
        <div className="details-info">
          <span className="product-category">{product.category}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span className="product-price">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
