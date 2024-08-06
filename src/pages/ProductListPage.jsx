import "./ProductListPage.css";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const fakeAPI = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(fakeAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log("Error fetching products: ", error));
  }, []);

  return (
    <div className="ProductListPage">
      <ProductCard products={products} />
    </div>
  );
}

export default ProductListPage;
