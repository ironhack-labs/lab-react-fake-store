import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Importa el componente Link de react-router-dom

function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);  // Establece los productos en el estado
      })
      .catch((error) => {
        setError("Error loading products");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {error && <p>{error}</p>}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id} style={styles.card}>
              <Link to={`/product/details/${product.id}`} className="product-link" style={styles.link}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                  style={styles.image}
                />
                <div className="product-details" style={styles.details}>
                  <h2 style={styles.title}>{product.title}</h2>
                  <p style={styles.category}>{product.category}</p>
                  <p style={styles.price}>${product.price}</p>
                  <p style={styles.description}>{product.description.slice(0, 100)}...</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    margin: "15px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    width: "100%",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  details: {
    marginLeft: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  category: {
    fontSize: "14px",
    color: "#888",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginTop: "10px",
  }
};

export default HomePage;
