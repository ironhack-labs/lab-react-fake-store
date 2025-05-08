import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetailsPage() {
  const [product, setProduct] = useState({})

  const urlID = useParams().productId
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${urlID}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
      })
  }, [urlID])

  return (
    <div className="ProductDetailsPage">
      <div className="product-card">
        <div className="product-card_titles">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-card_details">
          <h2>{product.title}</h2>
          <p>{product.price}€</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage