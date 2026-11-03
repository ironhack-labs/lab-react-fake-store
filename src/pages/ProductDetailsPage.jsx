import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);

  if (product === null) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} width="150" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;