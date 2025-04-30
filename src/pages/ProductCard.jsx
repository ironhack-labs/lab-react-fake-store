import { Link } from "react-router-dom"
import './../pages/ProductCard.css'

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating
}) => {
  return (
    <div className="ProductCard">
      <Link to={`/product/details/${id}`}>
        <img src={image} alt="Product" />
        <h1>{title}</h1>
        <p>{price}€</p>
        <p>{category}</p>
        <p>{description}</p>
      </Link>
    </div>

  )
}

export default ProductCard