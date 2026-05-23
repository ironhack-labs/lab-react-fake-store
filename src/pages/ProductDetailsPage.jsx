import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  // Get productId from URL
  const { productId } = useParams();

  // Fetch product details
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
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width="200"
      />

      <p>{product.description}</p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>
    </div>
  );
}

export default ProductDetailsPage;