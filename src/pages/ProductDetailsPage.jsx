import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams(); // get the ID from the URL
  const [product, setProduct] = useState(null); // start as null instead of {}

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>; // loading state
  }

  return (
    <div className="ProductDetailsPage container">
      <div className="card">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
          </div>
    </div>
  );
}

export default ProductDetailsPage;
