import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const {productId} = useParams();

  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const fetchProductDetails = async() =>{
    try{
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      if(response.ok){
        const productDetail = await response.json();
        setProduct(productDetail)
      }
    }catch(error){
      console.log(error)
    }
  }
  // To fetch the product details, set up an effect with the `useEffect` hook:


  useEffect(() =>{
    fetchProductDetails();
  }, [productId])
  return (
    <div key={product.id}>
    
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
        <p>{product.description}</p>
        <p>{product.price}</p>
      
    
    </div>
  );
}

export default ProductDetailsPage;
