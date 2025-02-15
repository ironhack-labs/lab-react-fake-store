import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para errores

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    setIsLoading(true); // Establecemos `isLoading` en true antes de hacer la solicitud
    setError(null); // LImpiamos errores anteriores

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al cargar los detalles del producto.");
        setIsLoading(false);
  });
}, [productId]);

if (isLoading) {
  return <p>Cargando...</p>; // Mostrar mensaje de carga mientras se obtiene la información
}

if (error) {
  return <p>{error}</p>; // Mostrar mensaje de error si algo salió mal
}

return (
  <div className="ProductDetailsPage">
    {/* Render product details here */}
    <div className="ProductDetailsPage-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-category">{product.category}</p>
      <h3 className="card-title">{product.title}</h3>
      <div className="description-price">
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>

    </div>

  </div>
);
}

export default ProductDetailsPage;
