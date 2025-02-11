import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setError("Error al cargar el producto");
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p className="loading-message">Cargando...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="product-details-page">

      <div className="product-content">
        <img src={product.image} alt={product.title} />
        <div>
          <p>
            <span className="product-category-label">Categoría:</span> {product.category}
          </p>
          <h1>{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>

        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
