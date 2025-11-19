import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Products</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ margin: "1rem 0", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}
          >
            <Link
              to={`/product/details/${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
