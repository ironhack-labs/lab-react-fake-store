import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {

  const dynamicParams = useParams();
  // console.log(dynamicParams);

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/details/${dynamicParams.productId}`)
    .then((response) => {
      // console.log(response);
      setProduct(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [dynamicParams.productId])



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h1>TEST PRODUCT DETAILS PAGE</h1>
    </div>
  );
}

export default ProductDetailsPage;
