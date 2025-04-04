import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const {productId} = useParams();

  async function getProduct (id) {
    console.log("fetching right product")
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`)
    const responseData = await response.json();

    setProduct(responseData)
  }

  useEffect(() => {
    getProduct(productId)
  }, [])

  console.log(productId)



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h1>Hello</h1>
    </div>
  );
}

export default ProductDetailsPage;
