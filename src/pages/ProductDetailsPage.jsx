import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState([]);
  const { productId } = useParams()


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + productId)
    .then(response => {
      setProduct(response.data)
    })
    .catch(error => {
      console.log("error", error)
    })
}, [])



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    {product && 
    <div>
      <img src={product.image} alt="product image" />
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
    }
    <Link to="/"><button>Back to home</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
