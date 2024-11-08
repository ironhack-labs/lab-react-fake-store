import { Link } from "react-router-dom"
import "./ProductCard.css"


const ProductCard = ({ image, title, description, price, category, id }) => {

    return (
        <Link to={`/product/details/${id}`}>
            <div className="ProductCard">

                <div className="image-card">
                    <img className="product-image" src={image} alt="Product Image" />
                </div>

                <div className="info">

                    <h2>{title}</h2>
                    <p>{category}</p>
                    <p>{price}€</p>
                    <p>{description}</p>

                </div>
            </div>
        </Link>
    )
}

export default ProductCard
