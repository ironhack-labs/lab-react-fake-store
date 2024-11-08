import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import './ProductDetailsPage.css'

const APIURL = 'https://fakestoreapi.com'

function ProductDetailsPage() {

  const { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
      .get(`${APIURL}/products/${productId}`)
      .then(response => {
        setProduct(response.data)
      })
  }, [])

  console.log(product)
  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <label htmlFor=""> {product.category} </label>
      <div className="productContent">
        <h1> {product.title} </h1>
        <div className="productDetails">
          <p> {product.description} </p>
          <h5> ${product.price} </h5>
        </div>
      </div>
      <Link to="/">
      <button>Volver a la lista</button>
      </Link>
    </div>
  )
}

export default ProductDetailsPage;
