import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

const {productId} = useParams();
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
const baseUrl ="https://fakestoreapi.com/products"

  // To fetch the product details, set up an effect with the `useEffect` hook:
useEffect(()=>{
  axios .get(`https://fakestoreapi.com/products/+${productId}`)
  .then(response =>{
    setProduct(response.data);
  })
  .catch(e =>{
    console.log(e)
  })
},[])


  return (
    <div className="ProductDetailsPage">
  <div className="productImage"><img src={product.image} /></div>
  <div><span>{product.category}</span></div>
  <div><strong>{product.title} </strong></div>
  <div><p>{product.description}</p></div>
  <Link to='/'><button className="btn-secondary">Back</button></Link>
  
    </div>
  );
}

export default ProductDetailsPage;
