import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
      <div>
        {fetching && <p>Loading ...</p>}

        {products.map((prod) => {
          return (
            <NavLink to={`/product/details/${prod.id}`}>
              <div key={prod.id} className="card">
                <img className="list-image" src={prod.image} alt="product" />
                <h3 className="list-title">{prod.title}</h3>
                <p className="list-category">{prod.category}</p>
                <p className="list-price">${prod.price}</p>
                <p className="list-description">{prod.description}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListPage;
