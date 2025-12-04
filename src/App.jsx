import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

