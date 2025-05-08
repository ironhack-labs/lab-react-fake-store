import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";


function App() {

  return (
    <div className="App relative z-20 pt-20">

      <AppRoutes />

    </div>
  );
}

export default App;
