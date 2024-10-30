import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
function ProductDetailsPage () {
  const { productId } = useParams()
  console.log(productId)

  const [product, setProduct] = useState({})
  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        setProduct(res.data)
        console.log(res.data)
      })
      .catch(e => console.log(`this is our error`, e))
  }
  useEffect(getData, [])

  return (
    <div className='ProductDetailsPage'>
      <div>
        {' '}
        <div className='img-frame'>
          <img src={product.image} alt='' />
        </div>
        <p>{product.category}</p>
        <p className='product-title'>{product.title}</p>
        <h5>{product.description}</h5>
      </div>

      <div>
        {' '}
        <p>{product.price}</p>
      </div>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default ProductDetailsPage
