import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  

function ProductDetailsPage() {

  const [product, setProduct] = useState({});

  const { productId } = useParams();

  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]); 

  return (
    <div className="ProductDetailsPage">
    
      <h1>{product.title}</h1>
      <p>Precio: ${product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px" }}
      />
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      
      {product.rating && (
        <p>
          <strong>Valoración:</strong> {product.rating.rate} / 5 
          ({product.rating.count} opiniones)
        </p>
      )}
    </div>
  );
}

export default ProductDetailsPage;