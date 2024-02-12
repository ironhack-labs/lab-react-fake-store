import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const baseUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(baseUrl)
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.log("Error getting the products", error);
    });
  },[]);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products !== null &&
      products.map((productDetails, index) => {
        return (
          <Link key={productDetails.id} to={`/product/details/${productDetails.id}`}>

          <div key={index}  className="card">
          <img src={productDetails.image} />
          <h2><b>{productDetails.title}</b></h2>
          <p>${productDetails.price}</p>
          <p>{productDetails.description}</p>
          

          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
