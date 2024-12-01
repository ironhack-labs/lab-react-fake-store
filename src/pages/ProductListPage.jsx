import { useState, useEffect } from "react";
import "./ProductListPage.css"


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);    

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
  fetch('https://fakestoreapi.com/products')
    .then((response) => {
      return response.json() })
    .then((data)=> {
      console.log("data: ", data)
      setProducts(data);
     })
     console.log("type of products: ", products.typeof)
     console.log("products updated?? ", products)

    }, [] );

  return (
    <div className="ProductListPage">
       
      {products.map((product) => {
    return ( 
      <div key={product.id} className="product">
      <img className= "productImage" src={product.image} alt="product image"/>
      <p > {product.title} </p>
      <p > {product.category} </p>
      <p > {product.price} </p>
      <p > {product.description} </p>
      </div>
      )
  })}
    </div>
  );
} 

export default ProductListPage;
