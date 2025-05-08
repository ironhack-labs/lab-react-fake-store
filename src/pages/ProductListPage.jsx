import { useState, useEffect } from "react";
const apiURL = "https://fakestoreapi.com/products";
import ProductCard from "./ProductCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default ProductListPage;
