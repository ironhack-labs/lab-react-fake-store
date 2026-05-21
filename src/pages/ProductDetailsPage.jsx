import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
const api = axios.create({
  baseURL: "https://fakestoreapi.com",
})

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get(`/products/${productId}`)
        setProduct(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [productId])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <div className="ProductDetailsPage">
      {
        <div>
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default ProductDetailsPage
