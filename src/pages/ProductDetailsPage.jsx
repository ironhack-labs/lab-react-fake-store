import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [productId]);

  if (!product.id) return <p style={{ padding: "20px" }}>Cargando...</p>;

  return (
    <div className="ProductDetailsPage" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "250px", margin: "0 auto", display: "block", objectFit: "contain" }}
      />

      <h1 className="text-3xl mt-4">{product.title}</h1>

      <p className="mt-3 text-gray-600">{product.description}</p>

      <p className="text-green-600 text-2xl mt-6">
        <strong>${product.price}</strong>
      </p>
    </div>
  );
}

export default ProductDetailsPage;

