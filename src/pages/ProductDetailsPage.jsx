import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const BASE_URL = "https://fakestoreapi.com";
  const {productId} = useParams()

  useEffect(()=>{
    axios.get(BASE_URL + "/products/" + productId)
    .then((response)=>{
      setProduct(response.data)
    })
    .catch(()=>{
      console.log("Error", e)
    })
  }, [])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="productDetailsPage">
    <img className="image" src={product.image}/>
    <p>{product.title}</p>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <Link className="backBtn" to="/">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
