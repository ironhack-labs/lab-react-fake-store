import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

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

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />

      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>€{product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;