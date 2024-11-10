import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";
import { ProductItem } from "./components/ProductItem.jsx/ProductItem";


function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
        <Route path="/details/product/details/:productId" element={<ProductItem />} />

      </Routes>

    </div>
  );
}

export default App;
