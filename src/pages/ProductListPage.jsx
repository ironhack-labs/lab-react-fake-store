import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const baseURL = "https://fakestoreapi.com/products";
    axios
      .get(baseURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("error getting list of characters...", e);
      });
  }, []);
  return (
    <div className="ProductListPage">
      {
        /* Render list of products here */
        products?.map((product) => {
          return (
            <div key={product.id}>
            <Link to={`product/details/${product.id}`}>
              <div className="card">
                <img src={product.image} alt="" />
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </div>
            </Link>
            </div>
          );
        })
      }
    </div>
  );
}

export default ProductListPage;
