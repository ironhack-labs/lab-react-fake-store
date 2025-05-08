import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products when the component mounts
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        // Handle success
        setProducts(response.data); // Save the response data in the state
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} width="100" />
              <p>{product.description}</p>
              <p>${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
