import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import HomePage from "./components/HomePage";
import ProductDetailsPage from "./components/ProductDetailsPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/product/details/:productId"
            element={<ProductDetailsPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
