import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({ id, image, title, category, price, description }) {

    return (
        <Link className="product-card" to={`/product/details/${id}`}>
            <img className="product-image" src={image} alt={title} />
            <h2 className="product-name">{title}</h2>
            <p>{category}</p>
            <p>${price}</p>
            <p>{description.slice(0, 50)}</p>
        </Link>
    )

}

export default ProductCard