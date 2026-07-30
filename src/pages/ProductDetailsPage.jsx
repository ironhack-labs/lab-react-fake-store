import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com{productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("ERROR: Couldn't find the products details:", error);
      });
  }, [productId]); 
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className="ProductDetailsPage" style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <h1>{product.title}</h1>
      <p style={{ fontWeight: "bold" }}>Category: {product.category}</p>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <Link to="/">
        <button style={{ marginTop: "20px", padding: "10px" }}>Go back to the shop</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;