import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <HomePage />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;

