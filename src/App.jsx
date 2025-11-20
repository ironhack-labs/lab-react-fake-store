import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router> {/* Add this wrapper */}
      <div className="App relative z-20 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
         
          <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
           <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </div>
    </Router> 
  );
}

export default App;