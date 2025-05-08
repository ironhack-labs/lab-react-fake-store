import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  if (!product) return <p>Loading...</p>
  if (Object.keys(product).length === 0) return <p>No product found.</p>;



  return (
    <div className="ProductDetailsPage">
    <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
