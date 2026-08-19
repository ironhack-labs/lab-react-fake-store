import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products</h1>

      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div>
            <h2>{product.title}</h2>
            <p>€{product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
