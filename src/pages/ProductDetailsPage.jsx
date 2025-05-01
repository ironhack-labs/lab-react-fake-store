import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Agregamos useNavigate para el botón de "Back"

function ProductDetailsPage() {
  const { productId } = useParams(); // Obtenemos el id del producto desde la URL
  const [product, setProduct] = useState(null); // Estado para almacenar los detalles del producto
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate(); // useNavigate nos permite navegar a otra página

  useEffect(() => {
    // Realizamos la solicitud a la API para obtener los detalles del producto
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data); // Guardamos los detalles del producto en el estado
      })
      .catch((error) => {
        setError("Error loading product details");
        console.error(error);
      });
  }, [productId]); // Este efecto se ejecutará cada vez que cambie el id del producto en la URL

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-container">
      <h1 className="product-title">{product.title}</h1>
      <div className="product-details">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;

