import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {fetching && <p>Loading ...</p>}

      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} className="card">
            <img src={product.image} alt="apartment" />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>$ {product.price}</p>
            <p>{product.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
