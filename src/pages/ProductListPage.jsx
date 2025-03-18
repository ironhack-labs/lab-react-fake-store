import { useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      // Handle success
      setProducts(response.data)
      console.log(response);
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    })
},[]);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Products List</h1>
      <ul>
    {products.map(product=>(
      <li key={product.id}>
        <Link to={`/product/details/${product.id}`}>
        <h2>{product.title}</h2>
        <p>Price:${product.price}</p>
        <img src={product.image} alt={product.title} width='100' />
        </Link>
      </li>
    ))}
    </ul>
    </div>
  );
}

export default ProductListPage;
