import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
    
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price ? product.price.toFixed(2) : 'N/A'}</p>
        <p className="description">{product.description}</p>
      </div>
      <button onClick={()=> navigate(-1)} className="button">back</button>
    </div>
  );
}

export default ProductDetailsPage;