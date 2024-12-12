import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"
import '../App.css'


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Error al cargar el producto. Intenta de nuevo.");
        setLoading(false)
      });
  }, [productId])
  if (loading) {
    return <p className="loading-text">Cargando detalles del producto...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  if (!product) {
    return <p className="error-text">Producto no encontrado.</p>;
  }

  return (
    <div className="ProductDetailsPage">
    <div className="product-details-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-details-image"
          style={{ width: "300px", height: "auto", objectFit: "contain" }}
        />
        <div className="product-details-info">
          <h1 className="product-details-title">{product.title}</h1>
          <p className="product-details-category">{product.category}</p>
          <p className="product-details-price">{`$${product.price}`}</p>
          <p className="product-details-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
