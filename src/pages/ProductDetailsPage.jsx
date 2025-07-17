import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error loading product details:", error);
      });
  }, [productId]);

  if (!product) return <div>Loading product details...</div>;

  return (
    <div style={{ display: "flex", gap: "24px", padding: "32px" }}>
      <div>
        <img src={product.image} alt={product.title} style={{ width: "300px" }} />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
