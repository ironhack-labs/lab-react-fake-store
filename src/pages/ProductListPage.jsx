import axios from "axios";
import { useState, useEffect } from "react";
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

  if (fetching) return <div>loading...</div>;
  return (
    <div className="ProductListPage">
      <h2> List of Products</h2>

      {products.map((prod) => {
        return (
          <Link to={`/product/details/${prod.id}`} key={prod.id}>
            <div className="card">
              <div className="content">
                <img src={prod.image} alt="product" />
                <h3>{prod.title}</h3>
                <p>{prod.category}</p>
                <p>{prod.price}</p>
                <p>{prod.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
