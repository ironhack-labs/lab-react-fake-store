import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Iteration 3
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!product) {
    return <div>Loading</div>;
  }

  return (
    <div className="ProductDetailsPage container p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover mb-4"
      />
      <p className="text-lg font-semibold mb-2">${product.price}</p>
      <p className="mb-4">{product.description}</p>
      <button className="btn-primary">Add to Cart</button>
    </div>
  );
}

export default ProductDetailsPage;
