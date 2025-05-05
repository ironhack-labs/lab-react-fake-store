import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  console.log("ProductListPage rendered");

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return products.map((product) => (
    <div key={product.id} className="ProductListPage">
      {<ProductCard product={product} />}
    </div>
  ));
}

export default ProductListPage;
