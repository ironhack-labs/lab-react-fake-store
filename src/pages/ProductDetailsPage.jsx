import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const {productId} = useParams();

   useEffect(()=> {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.data)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
   })



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img className="product-image"
           src={product.image} 
          alt={product.title} />
      <h2>{product.title}</h2>
      
      <p>${product.price}</p>
      <p >{product.description}</p>

    </div>
  );
}

export default ProductDetailsPage;
