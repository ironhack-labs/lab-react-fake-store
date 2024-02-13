import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopCart from "./pages/ShopCart"

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:id" element={<ProductDetailsPage />} />
        <Route path="/shopcart" element={<ShopCart />} />
      </Routes>

    </div>
  );
}

export default App;
