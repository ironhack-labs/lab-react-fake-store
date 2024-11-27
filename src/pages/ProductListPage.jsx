import { useState, useEffect } from "react";


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
    return <p key={product.id}> {product.title} </p>;
  })}
    </div>
  );
} 

export default ProductListPage;
