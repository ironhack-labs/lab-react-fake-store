import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListPage () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
        console.log(res.data)
      })
      .catch(e => console.log(`this is our error`, e))
  }, [])

  return (
    <div className='ProductListPage'>
      {products.map(product => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div className='card'>
            <div className='img-frame'>
              <img src={product.image} alt='' />
            </div>
            <div className='description'>
              <p>{product.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductListPage
