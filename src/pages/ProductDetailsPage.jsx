import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams()


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
  console.log("this is the updating useEffect");

  const getSingleChar = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
    const parsed = await response.json();
        console.log("parsed in the single page", parsed);
        setProduct(parsed);
    } 
    catch (err) {
      console.log("there was an error with single char", err);
    }}

  getSingleChar();
  
}, [productId]);

return (
  <div className="ProductDetailsPage">
  {/* Render product details here */}
    <img src={product.image} width={"100"} />
    <p>{product.title}</p>
    <p>{product.category}</p>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <Link to="/"><button>Back</button></Link>
  </div>
);
}

export default ProductDetailsPage;
