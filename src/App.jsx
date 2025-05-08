import "./App.css";
import Navbar from "./components/Navbar";
/* import ProductListPage from "./pages/ProductListPage"; */
import ProductDetailsPage from "./pages/ProductDetailsPage";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
      <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<ProductListPage />} /> */}
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}