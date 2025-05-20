import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error al obtener productos:", error);
      });
  }, []);

  return (
    <div className="ProductListPage" style={{ padding: "20px" }}>
      <h1>Lista de Productos</h1>

      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/details/${product.id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              width: "100%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {/* Imagen del producto */}
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                marginRight: "20px",
              }}
            />

            {/* Info del producto */}
            <div>
              <h1 style={{ margin: "0 0 10px 0" }}>{product.title}</h1>
              <h2 style={{ margin: "0 0 5px 0", color: "#666" }}>{product.category}</h2>
              <h2 style={{ margin: "0 0 10px 0", color: "#2e8b57" }}>{product.price}</h2>
              <p style={{ margin: 0, color: "#444" }}>
                {product.description.length > 150
                  ? product.description.slice(0, 150) + "..."
                  : product.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
