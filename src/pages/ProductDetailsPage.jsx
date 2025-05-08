import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import "../pages/ProductDetailsPage.css"


function ProductDetailsPage() {
  
  const { productId } = useParams();
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  const apiProductUrl = `https://fakestoreapi.com/products/${productId}`;

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  async function fetchProductDetails() {
    try {
      const response = await fetch(apiProductUrl)
      const jsonResponse = await response.json();
      setProduct(jsonResponse);
      setLoading(false);
    }
    catch (error) {
      console.log("There was an error")
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  if (loading) return <p>Loading product details...</p>;

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <h3>Price: ${product.price}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <div>{product.category}</div>
    </div>
  );
}

export default ProductDetailsPage;
