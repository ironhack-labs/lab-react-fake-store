import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  
  const [product, setProduct] = useState({});
  

  useEffect(() => {
  const getProductDetails = async () => {
    try { 
      const response = await axios.get ('https://fakestoreapi.com/products/${productId}')
      setProduct(response.data)
    } catch (error) {
      console.log("Erreur lors de la recup du produit:", error);
    }
  }
  getProductDetails()
}, [productId]);




  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div>
    
      {product ? (
        <div>
          <img src={product.image} alt={product.title} />
          <h1 >{product.title}</h1>
          <p >{product.description}</p>
          <div>
            <span >
              Catégorie : {product.category}
            </span>
            <span>
              {product.price} €
            </span>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
