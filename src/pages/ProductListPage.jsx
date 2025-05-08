import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const results = await response.json()
      setProducts(results)
    } catch (error) {
      console.error('Failed to fetch products', error)
    }
  }

  if (products === null) {
    return <h3>...cosas</h3>
  }

  return (
    <div className="ProductListPage">
      {products.map((cadaProducto) => {
        return (
          <Link
            key={cadaProducto.id}
            to={`/product/details/${cadaProducto.id}`}
          >
            <div className="card">
              <div>
                <img
                  style={{ width: '100px' }} // Adjust image width
                  src={cadaProducto.image}
                  alt={cadaProducto.title}
                />
              </div>
              <h4>
                <strong>{cadaProducto.title}</strong>
              </h4>
              <p> {cadaProducto.category}</p>
              <p>{cadaProducto.price}€</p>
              <p className="descripcion">{cadaProducto.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductListPage
