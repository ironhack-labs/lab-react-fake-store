import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        
        setProduct(data);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price} €</p>
    </div>
  );
}

export default ProductDetailsPage;