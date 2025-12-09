import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log("ERROR fetching product:", err));
  }, [productId]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="ProductDetailsPage container">
      <div className="product-row">
        <img src={product.image} alt={product.title} />

        <div className="ml-4 flex-1">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-price">{product.price} €</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
