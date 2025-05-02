import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((prod) => {
        return (
          <>
            <div key={prod.id} className="card">
              <img src={prod.image} />
              <Link to={`/product/details/${prod.id}`}>
                <p className="productListTitle">{prod.title}</p>
              </Link>
              <p>{prod.category}</p>
              <p>{prod.price}</p>
              <p>{prod.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ProductListPage;
