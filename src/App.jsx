import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductCard from "./components/ProductCard";

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <ProductCard />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
