import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
 const [product, setProduct] = useState({});
 const { productId } = useParams();
 
 useEffect(() => {
   const fetchProductDetails = async () => {
     try {
       const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
       
       if (!response.ok) {
         throw new Error('Failed to fetch product details');
       }
       
       const data = await response.json();
       setProduct(data);
     } catch (error) {
       console.error('Error fetching product details:', error);
     }
   };
   
   fetchProductDetails();
 }, [productId]);
 
 return (
   <div className="ProductDetailsPage">
     {Object.keys(product).length === 0 ? (
       <p>Loading product details...</p>
     ) : (
       <div className="product-details">
         <img src={product.image} alt={product.title} />
         <h1>{product.title}</h1>
         <p className="product-price">${product.price}</p>
         <p className="product-category">{product.category}</p>
         <div className="product-description">
           <h2>Description</h2>
           <p>{product.description}</p>
         </div>
       </div>
     )}
   </div>
 );
}

export default ProductDetailsPage;