import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  marginRight: "10px",
                  flex: "0 0 auto",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100px",
                    border: "none",
                    margin: "5px",
                  }}
                />
              </div>
              <div style={{ flex: "1" }}>
                <div style={{ textAlign: "center" }}>
                  <h2>
                    <b>{product.title}</b>
                  </h2>
                </div>
                <div>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <Link to={`/product/details/${product.id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
