import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      // Handle error
      console.log(error);
    })
  }, []);
  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <Link
          key={product.id}
          to={`/product/details/${product.id}`}   // ← URL has the id
          className="card grid grid-cols-5 items-center justify-between w-screen border-2 border-gray-300 mx-2 my-2 hover:bg-gray-50 cursor-pointer"
        >
            <img src={product.image} alt="product Image" width="150px" className="border border-gray-400 p-2" />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
