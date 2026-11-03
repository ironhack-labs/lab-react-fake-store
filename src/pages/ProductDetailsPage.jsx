import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [params.productId]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.productId}`,
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" width="200px" />
      <label>{product.category}</label>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
