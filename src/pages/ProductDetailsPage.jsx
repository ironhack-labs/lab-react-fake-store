import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false); 
      });
  }, [productId]); 


  if (loading) {
    return <p>Loading product details...</p>;
  }


  if (!product) {
    return <p>Product not found!</p>;
  }


  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="category">Category: {product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
