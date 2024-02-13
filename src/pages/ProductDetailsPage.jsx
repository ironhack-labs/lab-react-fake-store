import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import React from "react";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const baseUrl = 'https://fakestoreapi.com/products/:id';
  const [product, setProduct] = useState({});
  let {productId} = useParams();

  useEffect = (() => {
    axios.get(`${baseUrl}/${productId}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(error => {
        console.log(error)
        return (`No infos currently available`)
      });
  }, [productId]);



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      <div key={productId} className="productDetails">
        <img src={product.image} alt={product.title} />
        <p>{product.category}</p>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
