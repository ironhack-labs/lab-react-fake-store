import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error cargando producto:", error);
      });
  }, [productId]);

  if (!product) {
    return <p>Cargando detalles del producto....</p>
  }

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        style={{ maxwidth: "200px" }}
      />

      <p><strong>Precio:</strong> {product.price} €</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Descripción:</strong> {product.description}</p>

      <Link to="/"> Volver a la Lista</Link>
    </div>
  );
}

export default ProductDetailsPage;
