import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"


function ProductDetailsPage() {

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()

  useEffect(() => {
    loadProduct()
  }, [productId])

  const loadProduct = () => {

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="ProductDetailsPage">
      {
        isLoading
          ?
          <h1>Loading...</h1>
          :
          <article className="ProductDetailsArticle">
            <img src={product.image} alt={product.title} />
            <p className="productCategory">{product.category}</p>
            <h2><strong>{product.title}</strong></h2>

            <div className="styling-div">
              <p className="productDesc">{product.description}</p>
              <p className="productPrice"> <strong>${product.price}</strong></p>
            </div>
          </article>
      }
      <hr />
      <Link to="/">
        <button className="btnBack">Back</button>
      </Link>
    </div>
  )
}

export default ProductDetailsPage