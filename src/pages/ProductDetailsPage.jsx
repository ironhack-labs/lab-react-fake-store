import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      {product.title && (
        <>
          <h1>{product.title}</h1>

          <img
            src={product.image}
            alt={product.title}
            width="300"
          />

          <p>{product.description}</p>

          <p>{product.price} €</p>

          <p>Category: {product.category}</p>

          <p>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;