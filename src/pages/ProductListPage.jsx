import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductListPage.css";

const URL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(URL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) {
    return <p>No products</p>;
  }

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`}>
          <div key={product.id} className="product">
            <img src={product.image} alt={product.image} />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
