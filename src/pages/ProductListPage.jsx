import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductListPage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return ( // Falta ProductCard

    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="product-card">
              <div className="product-card_titles">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-card_details">
                <h2>{product.title}</h2>
                <p>{product.price}€</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductListPage
