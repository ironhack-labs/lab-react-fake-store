import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId}= useParams()


  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const result = await response.json();
      setProduct(result); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
     
 
 
}

useEffect(()=>{
fetchData();
},[]);// The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    <ul>
    <li></li>
    </ul>
    {}
    </div>
  );
}

export default ProductDetailsPage;