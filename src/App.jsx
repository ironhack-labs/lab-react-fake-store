import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Update quantity if product already exists
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new product to cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/product/details/:productId" element={<ProductDetailsPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
