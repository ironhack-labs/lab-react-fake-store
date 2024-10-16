import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";// You can access it with the `useParams` hook from react-router-dom.
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [loading,setLoading] = useState(true);
  const [error, setError] =useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) =>{
      setProduct(response.data);
      setLoading(false);
    }).catch((error) => {
      setError(error.message);
      setLoading(false);
    })
  },[productId]);
  
  if (loading){
    return <p> Loading product dtails......</p>
  }
  if (error) {
    return <p>There is an Error{error}</p>
  }
  if (!product){
    return <p>Product not found.</p>
  }
  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
