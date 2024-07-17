import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get(apiURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <Link to={`/product/details/${product.id}`}>
              <h4>{product.title}</h4>
            </Link>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
