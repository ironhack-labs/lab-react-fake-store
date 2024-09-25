import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetailsPage() {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    getData()
  }, [productId]) // Add productId to the dependency array

  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      )
      const result = await response.json()
      setProduct(result)
    } catch (error) {
      console.log('Error fetching product details', error)
    }
  }

  if (product === undefined) {
    return <h3>no funciona</h3>
  }
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div className="cardDetail">
        <div>
          <img style={{ width: '250px' }} src={product.image} alt="" />
        </div>
        <h4>
          <strong>{product.title}</strong>
        </h4>
        <p> {product.category}</p>
        <p>{product.price}€</p>
        <p className="descripcion">{product.description}</p>
        <Link to={'/'}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductDetailsPage
