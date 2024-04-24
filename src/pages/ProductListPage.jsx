import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const apiURL = "https://fakestoreapi.com/products";
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

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
      {/* <h3>List of apartments</h3>
      {fetching && <p>Loading ...</p>} */}

      {products.map((prod, i) => {
        return (
          <div key={i} className="card">
            <Link to={`/product/details/${prod.id}`} key={i}>
              <b>
                <h2>{prod.title}</h2>
              </b>
              <img src={prod.image} alt="product" />
              <b>
                <i>
                  <p>Price: {prod.price}</p>
                </i>
              </b>

              <p>
                <i>{prod.description}</i>
              </p>
              <p>{prod.category}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
