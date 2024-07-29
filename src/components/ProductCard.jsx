import { Link } from "react-router-dom"

const ProductCard = ({ id, title, image, category, price, description }) => {
  return (
    <li className="ProductCard">
      <Link to={`/product/details/${id}`} className="flex justify-stretch gap-4 mb-4 shadow bg-white rounded items-center p-4">
        <span className="flex-1 text-center font-semibold">
          <img src={image} alt={title} />
        </span>
        <span className="flex-1 text-center font-semibold">{title}</span>
        <span className="flex-1 text-center font-semibold">{category}</span>
        <span className="flex-1 text-center font-semibold">${price}</span>
        <span className="flex-1 text-center font-semibold">{description}</span>
      </Link>
    </li>
  )
}

export default ProductCard