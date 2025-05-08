import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error al obtener los productos:", error));
  }, []);

  return (
    <div className="container">
      <h1>Fake Store - Lista de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
