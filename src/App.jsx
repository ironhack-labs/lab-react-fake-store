import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
// import CartDetailsPage from "./pages/CartDetailsPage";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/cart/:cartId" element={<CartDetailsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
