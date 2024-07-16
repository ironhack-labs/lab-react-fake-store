// src/pages/ProductDetailsPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.title}
          className="md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 md:pl-10">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">Price: ${product.price}</p>
          <p className="text-md mb-4">Category: {product.category}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
