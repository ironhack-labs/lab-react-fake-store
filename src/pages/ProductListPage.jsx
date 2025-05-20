import { useState, useEffect } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al recibir los productos:", error);
      }
    };
    fetchProducts();
  });

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

      <h1>Lista de Productos</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <Link to={`/product/details/${product.id}`}>
              <li key={product.id}>
                <img src={product.image} alt={product.title} width="100" />
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductListPage;
