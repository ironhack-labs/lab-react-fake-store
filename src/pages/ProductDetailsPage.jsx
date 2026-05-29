import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`,
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchProducts();
  }, [productId]);

  if (!product) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }

  return (
   <div className="container mt-5">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: "600px" }}>
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: "300px", objectFit: "contain" }}
        />
        <div className="card-body text-center">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Precio:</strong> {product.price} €
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Rating: {product.rating?.rate} | Count: {product.rating?.count}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
