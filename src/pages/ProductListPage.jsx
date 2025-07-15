import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const BASE_URL = "https://fakestoreapi.com";

  useEffect(() => {
    axios
      .get(BASE_URL + "/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link to={"/product/details/" + product.id}>
            <div className="productItem">
              <img className="image" src={product.image} />
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
