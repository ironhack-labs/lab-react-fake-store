// src/App.jsx or src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
