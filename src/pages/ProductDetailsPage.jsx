import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './ProductDetailsPage.css'

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const productID = useParams().productId;
  console.log(productID);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productID}`)
    .then(response => response.json())
    .then(jsonData => setProduct(jsonData))
    .catch(error => console.error(error));
  }, [])

  const prodPrice ='$'+ Number.parseFloat(product.price).toFixed(2);


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div className="product-container">
          <img src={product.image} alt={product.title} />
        <div id="product-header">
          <p id="product-category">{product.category}</p>
          <p id="product-title">{product.title}</p>
        </div>
        <div id="product-data">
          <p>{product.description}</p>
          <p id="product-price">{prodPrice}</p>
        </div>
      </div>
      <hr />
      <Link to="/">
        <button id="button-back">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
