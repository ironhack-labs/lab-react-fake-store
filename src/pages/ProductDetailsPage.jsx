import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
 let {productId} = useParams()
 console.log(productId)
 

  // To fetch the product details, set up an effect with the `useEffect` hook:
 useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${productId}`).then((response)=>{
    const product = response.data
setProduct(product)
console.log(response)

  }).catch((error)=>{

   console.warn(error) 
  })

 },[productId])


  return (
    <div className="ProductDetailsPage">
    <div className="card">
      <img src={product.image}/>
      <h1>{product.title}</h1>
      <div>
        <p>{product.description}</p>
        <div>{product.price}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
