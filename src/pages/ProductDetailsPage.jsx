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
        console.log("Error getting product from the API | Error: ", error)
      });
  }, [productId]);

  if (!product) {
    return <p>Loading</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <h2>{product.price} €</h2>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;