import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import CartsPage from "./pages/CartsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
        <Route path="/carts/:productId" element={<CartsPage />} />

      </Routes>

    </div>
  );
}

export default App;
