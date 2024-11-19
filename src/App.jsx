import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <ProductListPage products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route
          path="/cart/:productId"
          element={<CartPage products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
