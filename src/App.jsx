import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App pt-20">
      <Navbar />

      <Routes>
        {/* PRODUCT LIST PAGE */}
        <Route path="/" element={<ProductListPage />} />

        {/* PRODUCT DETAILS PAGE */}
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
