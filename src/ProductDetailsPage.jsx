import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Link 
function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>Price: {product.price} €</p>
      <p>Category: {product.category}</p>
      
      {}
      <Link to="/">← Back to Products</Link>
    </div>
  );
}

export default ProductDetailsPage;
