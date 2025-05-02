
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";

function ProductDetailsPage() {
 
 
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState([]);
  let {useId}=useParams();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setProduct(json))
 
  }, [] );  

const productProfile=product.find(produc=>produc.id===useId)
console.log(productProfile)
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {productProfile}
    </div>
  );
}

export default ProductDetailsPage;
