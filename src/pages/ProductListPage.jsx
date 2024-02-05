import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h2>Product List</h2>
      <p>{fetching}</p>

      {products.map((clo) => {
        return (
          <div key={clo._id} className="card">
            <img src={clo.image} />
            <Link to={`/product/details/${clo.id}`}>{clo.title}</Link>

            <p>{clo.price}</p>
            <p>{clo.category}</p>
            <p>Price: {clo.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
