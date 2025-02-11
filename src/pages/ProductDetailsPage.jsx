import { useState,useEffect } from "react";
import { useParams,  } from "react-router-dom";




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
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p className="price"><strong>Price:</strong> ${product.price}</p>
      <p className="description"><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <a href="/" className="back-button">Back</a> 
    </div>
  )
  
}

export default ProductDetailsPage;
