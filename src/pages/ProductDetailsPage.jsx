import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"




function ProductDetailsPage() {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { productId } = useParams()


  useEffect(() => {
    getProductInfo()
  }, [])

  const getProductInfo = () => {

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => alert('ERROR RECIBIENDO LOS PRODUCTOS'))
  }

  return (

    isLoading
      ?
      <h1>CARGANDOOOOOO</h1>
      :
      <div className="ProductDetailsPage">

        <h1>{product.title}</h1>
        <img src={product.image} alt="Product" />
        <p>Category : {product.category}</p>
        <p>{product.description}</p>
        <Link to={'/'}>
          <button>Back</button></Link>

      </div>

  )
}

export default ProductDetailsPage;