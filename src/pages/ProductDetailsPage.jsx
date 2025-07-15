import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  
  const { productId } = useParams();

  
  const [product, setProduct] = useState(null);

  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  
  if (!product) return <p>Carregando...</p>;

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p><strong>Preço:</strong> ${product.price}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;