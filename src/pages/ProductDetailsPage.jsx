import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const data = await response.json();
      setProduct(data);
      console.log('Json Data is fetched', data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]); 

  return (
    <div className="ProductDetailsPage">
      <div key={product.id}>
        <img src={product.image} alt="Product image" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
      <Link to="/"><button type="button">Go Back</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
