import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";


function App() {

  return (
 <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}
  );
}

export default App;
