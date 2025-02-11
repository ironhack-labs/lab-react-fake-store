import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams(); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [productId]); 

  return (
    <div className="ProductDetailsPage">
    <img src={product.image} alt="product img" />
    <p>{product.title}</p>
    <p>{product.description}</p>
    <p>{product.price} €</p>
    </div>
  );
}

export default ProductDetailsPage;