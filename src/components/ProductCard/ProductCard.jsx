import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, title, category, price, description, id }) => {


    return (

        <Link to={`/product/details/${id}`}>
            <div className="ProductCard">
                <img src={image} alt="" />
                <h2> {title} </h2>
                <p> {category} </p>
                <p> ${price} </p>
                <p> {description} </p>
            </div>
        </Link>

    )

}

export default ProductCard