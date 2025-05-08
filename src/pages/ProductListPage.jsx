import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products List</h1>
      <div className="product-cards">
        {products.map((product) => (
          <Link
            to={`/product/details/${product.id}`}
            key={product.id}
            className="product-link"
          >
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-details">
                <h2>{product.title}</h2>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <p>{product.description.split(" ").slice(0, 8).join(" ")}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
