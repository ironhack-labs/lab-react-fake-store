import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams()


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getSingleProducct = async () => {
      try{
        const response = await fetch(
         `https://fakestoreapi.com/products/${productId}`
        );
        const parsed = await response.json();
        setProduct(parsed);
        console.log(parsed)
      }catch(err){
        console.log("there was an error",err);
      }
    };

    getSingleProducct();
  }, [productId])


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image}/>
    <p>{product.category}</p>
    <p><b>{product.title}</b></p>
    <p>{product.description}</p>
    <p><b>${product.price}</b></p>

    </div>
  );
}

export default ProductDetailsPage;
