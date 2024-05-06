import { useEffect, useState } from "react"
import ProductCard from "../pages/ProductCard"
import axios from "axios"

const apiURL = "https://fakestoreapi.com/products"


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {

    axios
      .get(apiURL)
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => alert('ERROR RECIBIENDO LOS PRODUCTOS'))
  }


  return (
    <div className="ProductListPage">
      {/* Render list of products here */
        isLoading
          ?
          <h1>CARGANDO...</h1>
          :
          products.map(product => {
            return (
              <ProductCard key={product.id} {...product} />

            )
          })
      }

    </div>
  );
}

export default ProductListPage;
