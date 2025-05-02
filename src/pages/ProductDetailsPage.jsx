import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
const {productId} = useParams()

const fetchProduct = async() => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    if(response.ok) {
      const productData = await response.json()
      console.log(productData)
      setProduct(productData)
    }
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  fetchProduct()
}, [])


  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
     </div>
  );
}

export default ProductDetailsPage;
