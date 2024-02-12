import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css'
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch((e) =>
       { console.log(e)}
        )},[]);

  return (
    <div className="ProductListPage">
        {products.map((product) => {
        return <Link to={`/product/details/${product.id}`} id={product.id}>
          <div className="itemList">
            <span> <img src={product.image} /></span>
            <span><span>{product.title}</span></span>
            <span><span>{product.category}</span></span>
            <span><span>{product.price}</span></span>
            <span><span>{product.description}</span></span>
          </div>
          </Link>
        })}
    </div>
  );
}

export default ProductListPage;
