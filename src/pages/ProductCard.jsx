
import { Link } from "react-router-dom"
import ProductDetailsPage from "./ProductDetailsPage"

const ProductCard = ({ id, image, title, price, category }) => {

    return (
        <div className="card">
            <Link to={`/product/details/${id}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>Price: {price}</p>
                <p>Category: {category}</p>
            </Link>
        </div>
    )
}

export default ProductCard