import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        console.log(error);
      });
  }, [productId]);  
  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width="200" alt={product.title} />
      <p>{product.description}</p>
      <p><strong>{product.price} €</strong></p>
    </div>
  );
}

export default ProductDetailsPage;



