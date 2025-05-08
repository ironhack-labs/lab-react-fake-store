import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetailsPage from "./ProductDetailsPage";
import { Link, NavLink } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  const apiURL = "https://fakestoreapi.com/products";

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      <h3>List of products</h3>

      {fetching && <p>Loading...</p>}

      {products.map((prod) => {
        return (
          <div key={prod.id}>
            <Link
              to={`/product/details/${prod.id}`}
              className="ProductListPage container"
            >
              <img src={prod.image} alt="product" />
              <h3>
                <strong>{prod.title}</strong>
              </h3>
              <p>{prod.category}</p>
              <p>{prod.price}</p>
              <p>{prod.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
