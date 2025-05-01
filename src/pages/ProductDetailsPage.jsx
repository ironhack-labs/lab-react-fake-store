import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams(); // Correctly extract productId

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const oneProductData = await response.json();
        console.log(oneProductData); // Ensure the response data is correct
        setProduct(oneProductData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getOneProduct();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="card">
        <div>
          <img src={product.image} alt={product.title} className="image" />
        </div>
        <div>{product.title}</div>
        <div>{product.category}</div>
        <h4>${product.price}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
