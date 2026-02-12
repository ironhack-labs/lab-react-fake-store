import { useState, useEffect } from "react";
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
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Product List</h1>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width="100" />
          <p>${product.price}</p>

          <Link to={`/product/details/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
