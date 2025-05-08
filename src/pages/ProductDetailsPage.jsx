import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function fetchProductDetails() {
      try{
        const response = await fetch(
          `https://fakestoreapi.com/products ${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } 
      catch(error) {
        console.log("Error fetching product details: ", error);
      }
    }
    if (productId){
      fetchProductDetails();
    }
  }, [productId])


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    </div>
  );
}

export default ProductDetailsPage;
