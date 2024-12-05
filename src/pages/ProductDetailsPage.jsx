

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();  
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);  

  return (
    <div className="ProductDetailsPage">
      {product && product.id ? (
        <div>     
          <img src={product.image} className="w-full h-48 object-contain mb-4"/>
          <p className="font-bold mb-4">{product.title}</p>
          <p className="font-bold mb-4">{product.category}</p>
          <p className="text-lg font-bold">${product.price}</p>
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;