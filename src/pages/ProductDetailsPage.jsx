import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams()


  const fetchProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    )
    
    setProduct(response.data)
    console.log(response.data, productId)
    
  }

  useEffect(()=>{
    fetchProduct();
  }, [productId])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    <img src={product.image}/>
      <p>{product.category}</p>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
     <p>{product.price}</p>
   
   <Link to="/">
    <button>Back</button>
   </Link>



    
    </div>
  );
}

export default ProductDetailsPage;
