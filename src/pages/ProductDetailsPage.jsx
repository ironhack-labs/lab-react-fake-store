import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import axios from "axios";


function ProductDetailsPage() {
  const{ productId } = useParams();
  console.log('productId', productId );
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

 useEffect(()=> {
  fetch(`https://fakestoreapi.com/products/${productId}`)
   .then(Response => Response.json())
   .then(data => setProduct(data))
   .catch(err => console.log(err))
 }, [])
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    <img src={product.image} width={'100px'} height={'100px'} />
      <h1>{product.title}</h1>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
      </div>
  );
}

export default ProductDetailsPage;
