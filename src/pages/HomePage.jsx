// src/pages/HomePage.jsx
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Products List</h1>
      <ul className="space-y-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center border p-4 rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 object-contain mr-4"
            />
            <div className="flex-1">
              <Link
                to={`/product/details/${product.id}`}
                className="block text-lg font-medium text-blue-600 hover:underline"
              >
                {product.title}
              </Link>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="text-lg font-bold text-right">${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
