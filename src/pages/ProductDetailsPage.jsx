import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, []); 

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      {product && (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
