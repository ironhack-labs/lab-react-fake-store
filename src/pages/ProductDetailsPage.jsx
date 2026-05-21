import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

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

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width="250"
      />

      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>

      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default ProductDetailsPage;