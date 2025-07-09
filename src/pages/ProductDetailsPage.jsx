import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null)

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        )
        setProduct(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProduct()
  }, [])

  return (
    <div>
      {/* Render product details here */}
      {product ? (
        <div className="flex justify-center items-center flex-col gap-4">
          <img
            src={product.image}
            alt="product image"
            className="w-[40vw] h-[40vh]"
          />
          <h1>{product.title}</h1>
          <span className="bg-sky-600 rounded-md p-1">{product.category}</span>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetailsPage