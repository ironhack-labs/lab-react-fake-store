import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailPage() {
  const [oneProduct, setOneProduct] = useState(null);
  const { productId } = useParams(); // Correctly use the parameter name from the route

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios(`https://fakestoreapi.com/products/${productId}`);
        setOneProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!oneProduct) {
    return <p>Loading....</p>;
  }

  return (
    <div className="ProductDetailPage">
      <img src={oneProduct.image} alt={oneProduct.title} style={{ height: "100px" }} />
      <h4>{oneProduct.title}</h4>
      <h5>{oneProduct.category}</h5>
      <h5>{oneProduct.price}</h5>
      <h5>{oneProduct.description}</h5>
    </div>
  );
}

export default ProductDetailPage;
