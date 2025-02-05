import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("initial useEffect mounting");
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {isLoading && <p>Loading....</p>}

      {products.map((product) => {
        const truncatedDescription =
          product.description.length > 100
            ? product.description.substring(0, 50) + "..."
            : product.description;

        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="card">
              <div className="image-box">
                <img src={product.image} alt={product.title} />
              </div>
              <h3> {product.title} </h3>
              <p> {product.category} </p>
              <p> ${product.price} </p>
              <p> {truncatedDescription} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
