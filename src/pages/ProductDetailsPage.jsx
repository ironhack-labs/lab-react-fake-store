import axios from "axios";
import {useParams, Link} from "react-router-dom"
import { useState, useEffect } from "react";
import ProductListPage from "./ProductListPage";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const {productId} = useParams();
  
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
      console.log(product)
    })
    .catch((error) => {
      console.log("Failure")
    })
  }, [productId])


  return (
    <div className="ProductDetailsPage">
          <div key={product.id} className="cardDetails"> 
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title}></img>
          <p>Price: {product.price}</p>
          <p>Rate: {product.rate}</p>
          <p>Count: {product.count}</p>
          <p>title: {product.title}</p>
        </div>
        <Link to="/products">Back to Products Page</Link>
      </div>
  );
}

export default ProductDetailsPage;
