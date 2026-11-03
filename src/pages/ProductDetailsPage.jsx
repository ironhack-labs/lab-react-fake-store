import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
console.log(product)
  
 const {productId}=useParams();
  console.log({productId})



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(error => console.log(error));
}, [productId]);

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}

 <>
<h1>{product.title}</h1>
<p>{product.price}</p>
<p>{product.description}</p>
<p>{product.category}</p>
<img src={product.image} />
</>



    </div>
  );
}

export default ProductDetailsPage;
