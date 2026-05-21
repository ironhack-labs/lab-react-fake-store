import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage"; // 1. Importar a página do carrinho

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* 2. Adicionar a rota */}
      </Routes>
    </div>
  );
}

export default App;
