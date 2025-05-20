import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  useEffect(() => {
    // Hacer la solicitud al cargar el componente
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los detalles del producto');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

  // To fetch the product details, set up an effect with the `useEffect` hook:

    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
    </div>
  );
}

export default ProductDetailsPage;
