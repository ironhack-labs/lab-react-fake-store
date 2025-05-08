import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"



function ProductListPage() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => loadProducts(), [])

  const loadProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="ProductListPage">
      {
        isLoading ? <h1>Loading</h1> : products.map(product => {
          return (
            <Link to={`/product/details/${product.id}`} productInfo={product}>
              <div className="ProductCard" key={product.id}>
                <img src={product.image} alt={product.title} />
                <article className="ProductInfo">
                  <p className="title">
                    <strong>{product.title}</strong>
                  </p>
                  <p className="category">{product.category}</p>
                  <p className="price">${product.price}</p>
                  <p className="description">{product.description}</p>
                </article>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default ProductListPage
