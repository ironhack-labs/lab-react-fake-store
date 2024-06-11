import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  if (error) {
    return <div>Error loading products. Please try again later.</div>;
  }

  return (
    <div className="ProductListPage">
      <h1>All Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "80px" }}
            />
            <p>{product.description}</p>
            <p>${product.price}</p>

            <Link to={`/product/details/${product.id}`}>View Details </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductListPage;
