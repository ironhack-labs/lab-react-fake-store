import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { useEffect, useState } from "react";
import axios from "axios";

import { Routes, Route } from "react-router-dom";


function App() {

  const [products, setProducts] = useState([]);

  const baseUrl = 'https://fakestoreapi.com/products'

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage products={products}/>} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
