import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/products" element={<ProductListPage />} />
      </Routes>
    </div>
  );
}

export default App;
