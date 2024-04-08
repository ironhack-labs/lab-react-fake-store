import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
function ProductDetailsPage() {
  const { productId } = useParams(); // Get the product id from URL parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]); // Fetch product details whenever the id parameter changes


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; // Render error message if an error occurs


  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
}
export default ProductDetailsPage;