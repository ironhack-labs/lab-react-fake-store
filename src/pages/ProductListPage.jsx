// ProductListPage - should display a list of all products

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //const { productId } = useParams();

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    // Fetch the list of products from the Fake Store API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Set the list of products in the state
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []); // The empty array [] is the dependency array.

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

      {loading && <p>Loading...</p>}
      {!loading &&
        products.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/product/details/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default ProductListPage;
