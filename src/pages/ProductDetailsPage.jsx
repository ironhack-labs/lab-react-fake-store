import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  async function getObjectData() {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const responseJson = await response.json();
    setProduct(responseJson);
  }

  useEffect(() => {
    getObjectData();
  }, [productId]); ////why does this work with empty array, too?

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <span>{product.category}</span>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <strong>{product.price}</strong>
      <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
