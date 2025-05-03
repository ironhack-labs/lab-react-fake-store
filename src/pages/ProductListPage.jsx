import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Page not found");
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <Link to={`/product/details/${product.id}`}>
              <div>
                <img src={product.image} />
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p>{product.price}$</p>
                <p>{product.description}</p>
              </div>
            </Link>
          </div>
        );
      })}
      {/* Render list of products here */}
    </div>
  );
}

export default ProductListPage;
