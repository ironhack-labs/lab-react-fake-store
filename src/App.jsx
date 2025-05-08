import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

import { Routes, Route } from "react-router-dom";

function App() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    }
    getProducts();
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage products={products} />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route
          path="/cart/:cartID"
          element={<CartPage products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
