import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <h2>Product Details</h2>
      <div className="card">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;