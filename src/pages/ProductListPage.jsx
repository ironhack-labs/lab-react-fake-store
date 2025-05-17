import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // For Iteration 2

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
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <li>
              <strong>{product.title}</strong>
              <br />
              <img src={product.image} alt={product.title} width="100" />
              <br />${product.price}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
