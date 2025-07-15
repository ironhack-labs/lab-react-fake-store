import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        console.log("SUCCESS on GET");
        setProducts(response.data);
      })
      .catch((error) => console.log("ERROR: ", error));
  }, []);

  function truncate(str, maxLength) {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card">
              <img src={product.image} alt={product.title} />
              <h3>{truncate(product.title, 13)}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <p>{truncate(product.description, 20)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
