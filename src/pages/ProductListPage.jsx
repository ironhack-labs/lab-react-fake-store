import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data); // (2) when fetchProducts() is called, then the setter is called again, and we have an infitine loop
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(); // (1) this gets data from the API
  }, []);

  // (3) to avoid the loop, we wrap everything in useEffect() --> run it once but just once
  // (4) all of this because in React we use the setter (setProducts) to change the state variable (products) -->
  // --> this is the way React watches everything and optimizes (to render it in the browser)

  /*
useEffect(() => {
  // ...
}, [a, b]); // Runs again if a or b are different
https://react.dev/reference/react/useEffect#examples-dependencies
  */

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products &&
        products.map((oneProduct) => {
          return <ProductCard key={oneProduct.id} product={oneProduct} />;
        })}
    </div>
  );
}

export default ProductListPage;
