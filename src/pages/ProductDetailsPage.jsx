import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams(); 
  const BASE_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${productId}`) 
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error al obtener los detalles del producto:", error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
