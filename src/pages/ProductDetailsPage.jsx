import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css"
function ProductDetailsPage() {
  const [product, setProduct] = useState(null); 
  const { productId } = useParams(); 
  

  
  async function fetchProductDetails() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      
      const data = await response.json();
      setProduct(data);
      console.log("esto es data: ", product)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  
  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {product && ( 
        <>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
