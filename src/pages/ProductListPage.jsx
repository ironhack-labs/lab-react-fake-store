import { useState, useEffect } from "react";
const productsUrl = "https://fakestoreapi.com/products";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  async function getProducts() {
    try {
      const response = await fetch(productsUrl);
      const jsonResponse = await response.json();

      setProducts(jsonResponse);
    } catch (error) {
      console.log("this is the error: ", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default ProductListPage;
