import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price} €</p>
    </div>
  );
}

export default ProductDetailsPage;
