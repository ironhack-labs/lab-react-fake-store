import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


  return (
    <div className="ProductListPage">
      
      {products.map((productObj) => {

        return (
          <div key={productObj.id} className="card">

            <p>Category: {productObj.category}</p>
            <p>Description: {productObj.description}</p>
            <img src={productObj.image} alt=":("></img>
            <p>Price: {productObj.price}</p>
            <p>Rating: {productObj.rating.rate}</p>
            <p>Rating: {productObj.rating.count}</p>
            <p>Title: {productObj.title}</p>
            <span><Link to={`/product/details/${productObj.id}`}>More Details</Link></span>
          </div>
      );
    })}
    </div>
  );
}


export default ProductListPage;
