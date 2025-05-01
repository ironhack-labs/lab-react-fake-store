import { useState,useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
 const {productId}=useParams();
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        // Handle success
        setProduct(response.data)
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      })
  },[productId]);


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h2>{product.title}</h2>
    <img src={product.image} alt={product.title} width='100' />
    <p>{product.description}</p>
    <p>{product.price}</p>
    <p>{product.category}</p>
    <Link to="/">Back to Products</Link>
    </div>
  );
}

export default ProductDetailsPage;
