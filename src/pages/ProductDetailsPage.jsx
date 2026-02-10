import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const params=useParams()
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      setProduct(data)
    })
  },[params.productId])
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      <div>
        <img src={product.image} alt="" />
        <p> {product.category} </p>
        <h1> {product.title} </h1>
      </div>
      <div>
        <p> {product.description} </p>
        <p> {product.price} </p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
