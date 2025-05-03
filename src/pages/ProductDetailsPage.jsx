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
        console.log("Error fetching product details:", error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage container card spacing-md">
      <h1>Product Details</h1>
      {product && (
        <>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "200px" }}
          />
          <h2 className="spacing-sm">{product.title}</h2>
          <p className="spacing-sm">
            <strong>Price:</strong> ${product.price}
          </p>
          <p>{product.description}</p>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;