import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const [fetching, setFetching] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      const apiURL = `https://fakestoreapi.com/products/${productId}`;
      axios.get(apiURL)
        .then((response) => {
          setProduct(response.data);
          setFetching(false);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setFetching(false);
        });
    }
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
      
      
      <div className="product-details-card">
        <img src={product.image} alt={product.title} />
        <div className="product-details-content">
          <h1>{product.title}</h1>
            <div className="product-info">
             <span className="tag">{product.category}</span>
             <p>${product.price}</p>
            </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/")} className="btn-secondary spacing-md">
        Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
