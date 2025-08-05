import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";
import { useState, useEffect } from "react";
import axios from "axios";
const apiURL = "https://fakestoreapi.com/products";

import { Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage products={products} />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/carts/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
