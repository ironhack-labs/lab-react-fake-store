import { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  let { productId } = useParams();
  // ...

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((jsonResponse) => setProduct(jsonResponse))
      .catch((error) => console.error(error)) // The console.error displays it with a red background in the browser console
    // .then((jsonResponse) => console.table(jsonResponse.results)) // we can console.table the results to have them in a table format in the console

  }, []) // DON'T FORGET THE EMPTY ARRAY HERE!!!! ⚠️




 console.log(productId);
 // https://fakestoreapi.com/products/:id


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    

    <div className="ProductDetailsPage">
    {/* Render product details here */ 
    
    }
    
    
    <p> {product.title}</p>
    <img src={product.image}/>
    <p> {product.id}</p>
    <p> {product.price}</p>
    <p> {product.description}</p>
    <p> {product.category}</p>   
    <Link class="back" to="/" relative="path"> Back </Link>
    </div>
  );
}

export default ProductDetailsPage;
