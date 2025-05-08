import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        console.log(`Fetching product with ID: ${productId}`);
        setDisplayError(false); 

        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        
        if (!response.ok) {
          console.log(`Failed to fetch product details. Status code: ${response.status}`);
          setDisplayError(true);
          return;
        }

        const jsonResponse = await response.json();
        setProduct(jsonResponse); 
        console.log("Fetched product:", jsonResponse);
      } catch (error) {
        console.log("There was an error:", error.message);
        setDisplayError(true); 
      }
    }

    fetchProduct();
  }, [productId]);

  if (displayError) {
    return <p>There was an error loading the product details. Please try again later.</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;
