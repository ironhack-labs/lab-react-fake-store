import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      }),
      [];
  });

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <img src={product.image} alt={product.title} width="100px" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
