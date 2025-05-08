import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

import { Routes, Route } from "react-router-dom";

const productsURL = 'https://fakestoreapi.com/products'
const cartURL = 'https://fakestoreapi.com/carts/2'

function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage productsURL={productsURL} />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage cartURL={cartURL} productsURL={productsURL} />} />
      </Routes>

    </div>
  );
}

export default App;
