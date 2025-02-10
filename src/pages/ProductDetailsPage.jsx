import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!product) return <></>;

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="category">{product.category}</p>
      <h2 style={{ fontWeight: "bold" }}>{product.title}</h2>
      <div className="information">
        <p className="description-detail">{product.description}</p>
        <p className="price">${product.price}</p>
      </div>

      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
