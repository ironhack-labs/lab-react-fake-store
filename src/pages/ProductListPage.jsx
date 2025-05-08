import { useEffect, useState } from "react"
import axios from "axios"
import "./ProductDetailsPage.css"
import { Link } from "react-router-dom"


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => loadProducts(), [])

  const loadProducts = () => {

    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))


  }


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {

        isLoading
          ?
          <h1>Loading...</h1>

          :

          products.map(prod => {

            return (
              <article className="ProductCard" key={prod.id}>
                <img className="productImage" src={prod.image} alt="product" />

                <h3> <Link to={`/product/details/${prod.id}`}>{prod.title} </Link></h3>
                <p>{prod.category}</p>
                <p>{prod.price}</p>
                <p>{prod.description}</p>
              </article>
            )
          })
      }
    </div>
  )
}

export default ProductListPage;
