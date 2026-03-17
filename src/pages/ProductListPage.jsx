import { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);   // save API data in state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="ProductListPage">
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <Link to={`/product/details/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          </Link>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width="100" />
          <p>${product.price}</p>
    </div>
      ))}
    </div>
  );
}

export default ProductListPage;
