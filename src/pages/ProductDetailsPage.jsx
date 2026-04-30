import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage(params) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
const {productId} = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
useEffect(() => {
  // Code to run
 axios.get(`https://fakestoreapi.com/products/${productId}`).then((response)=>{
  setProduct(response.data)
 })

}, [productId] );  //  <-- The effect will run every time the `productId`` changes


  return (
    <div className="ProductDetailsPage">
  <img src={product.image} />
  <h2>{product.title}</h2>
  <p>{product.price}</p>
  <p>{product.description}</p>
  <p>{product.category}</p>
</div>
  );
}

export default ProductDetailsPage;
