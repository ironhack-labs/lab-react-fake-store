import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await axios(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
}

export default ProductDetailsPage;
