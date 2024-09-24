import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const{productId}= useParams();   //obtengo el ID de la URL


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setProduct(data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [productId])

  return (
    <div className="ProductDetailsPage">
    <div>
      <h1>{product.title}</h1>
      <img src= {product.image} alt="imagen producto" width="250px"/>
      <p> <strong>Descripción:</strong> {product.description}</p>
      <p> <strong>Precio:</strong> {product.price} $</p>
      <p style={{color: "blue"}}> {product.category}</p>




    </div>

    </div>
  );
}

export default ProductDetailsPage;
