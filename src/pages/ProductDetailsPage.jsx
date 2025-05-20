import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error al obtener detalles del producto:", error);
      });
  }, [productId]);

  if (!product) return <h3>Cargando detalles del producto...</h3>;

  return (
    <div className="ProductDetailsPage">
      {/* BOTÓN BACK */}
      
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#28a745", // verde llamativo
          color: "white",             // texto blanco
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "20px"
        }}
      >
        Back
      </button>

      {/* DETALLES DEL PRODUCTO */}
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200px" />
      <h3>Precio: ${product.price}</h3>
      <p>Descripción: {product.description}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
