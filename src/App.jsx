import "./App.css";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from "./pages/CartPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="App relative z-20 pt-20">
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cart} setCartItems={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;