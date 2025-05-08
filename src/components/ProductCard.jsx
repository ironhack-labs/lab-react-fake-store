import { Link } from "react-router-dom"

const ProductCard = ({ image, title, price, description, category }) => {

    return (
        <div className="Product card">
            <img src={image} alt="Product Image"></img>
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{category}</p>


        </div>
    )
}

export default ProductCard