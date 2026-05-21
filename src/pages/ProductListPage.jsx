import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
})

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([])
  useEffect(() => {
    // axios.get().then().catch(err)
    const getProducts = async () => {
      try {
        const response = await api.get("/products")
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  useEffect(() => {
    console.log("test changed! 🤣", products)
  }, [products])
  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {products.map(product => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div>
              <img src={product.image} alt={product.title} width="100" />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductListPage
