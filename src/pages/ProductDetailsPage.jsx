import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const params = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null);
const [ isLoading, setIsLoading] = useState(true)

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    getData()
  }, [params.productId])

  const getData = async() => {
    setIsLoading(true)

    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${params.productId}`)
      console.log(response)
      setProduct(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      {/*if (error.status === 404) {
        navigate ("/not-found")
    */}
      }
    };
    if (isLoading) {
      return <h2>Loading...</h2>
    }


  return (
    <div className="ProductDetailsPage">

      <h1>{product.productId}</h1>
    <img src = {product.image} alt ={product.title} height="200px" />
         <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  )
}
export default ProductDetailsPage
