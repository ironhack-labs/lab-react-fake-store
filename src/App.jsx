import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetailsPage from "./components/ProductDetailsPage.jsx";
import ProductListPage from "./components/ProductListPage.jsx";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
