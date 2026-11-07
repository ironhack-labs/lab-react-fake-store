import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

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

  if (product === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        width="150"
      />
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;