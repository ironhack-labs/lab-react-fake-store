import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  });

  return (
    <div className="ProductListPage">
      {products &&
        products.map((oneProduct) => {
          return (
            <Link to={`/product/details/${oneProduct.id}`} key={oneProduct.id}>
              <div className="card">
                <img
                  src={oneProduct.image}
                  alt={oneProduct.name}
                  style={{ height: "100px" }}
                />
                <p>{oneProduct.title}</p>
                <p>{oneProduct.description}</p>
                <p>{oneProduct.price}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ProductListPage;
