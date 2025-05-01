import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo obtener el producto");
      }
      return response.json();
    })
    .then((data) => {
      setProduct(data);
      setLoading(false); // Desactiva el indicador de carga
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage" style={{ padding: "20px" }}>
    {/* Render product details here */}
    {product ? (
        <>
          <h1>{product.title}</h1>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
          <p><strong>Descripción:</strong> {product.description}</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Categoría:</strong> {product.category}</p>
        </>
      ) : (
        <p>No se encontraron detalles para este producto.</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
