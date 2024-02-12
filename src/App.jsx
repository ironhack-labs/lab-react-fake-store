import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [cart, setCart] = useState([]); //state for storing the cart 

  const addToCart = (product) => {
    setCart([ ...cart, product])
  }

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>

    </div>
  );
}

export default App;
