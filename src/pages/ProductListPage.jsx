import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
card: {
  width: "250px",
},
image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
};

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  {
    /*"id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"*/
  }
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h2>Products</h2>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <Link to={`/product/details/${product.id}`}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} style={styles.image} />
            <p>{product.description}</p>
            <p>{product.category} </p>

            <p>${product.price}</p>
             </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
