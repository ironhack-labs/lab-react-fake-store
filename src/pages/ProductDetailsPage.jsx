import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

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

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
