import { useState } from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
      console.log(response)
      setProducts(response.data);
    });
  }, []);


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((product)=>{
        return (
          <Link to={`/products/${product.id}`}>
          <article key={product.id}>
            <img src={product.image} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </article>
          </Link>
        )
      })}
    </div>
  );
}
Footer
© 2024 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Doc