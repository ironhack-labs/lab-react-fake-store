import { useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios"



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState([]);
  const {productId} = useParams()

useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${productId}`)
  .then((response) => {
    setProduct(response.data)
   
  })
  .catch((error) => {
    console.log(error)
  })
}, [productId])



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
<div> 
  {product && (
    <article key={product.id}>
    <div display="flex" justifyContent="center" mt="75px">
      <img src={product.image} className="images" />
    </div>
    <h1>{product.title}</h1>
    <h3>{product.category}</h3>
    <h2>
      <b>{product.price}€</b>
    </h2>
    <h3>{product.description}</h3>
  </article>
  )}
</div>
  )

}

export default ProductDetailsPage;
