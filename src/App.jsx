import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <Routes>
        {/* Página principal que muestra la lista de productos */}
        <Route path="/" element={<HomePage />} />

        {/* Ruta para mostrar los detalles del producto con el id correspondiente */}
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

