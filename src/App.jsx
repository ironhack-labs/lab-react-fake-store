import "./App.css";
import Navbar from "./components/Navbar";
import { ProductListPage } from "./pages/ProductListPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Mounting Phase");
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const allProducts = await response.json();

        setProducts(allProducts);
        setLoading(false);
      } catch (err) {
        console.log("there was error fetching all products", err);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage products={products} />} />
        <Route path="/product/details/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
