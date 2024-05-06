import { Link } from 'react-router-dom'
import './ProductsCard.css'

const ProductsCard = ({ id, image, title, category, price, description }) => {

    return (
        <Link to={`/product/details/${id}`} >

            <div className="productsCard">
                <img src={image} alt="product" />
                <h2>{title}</h2>
                <p>{category}</p>
                <p>Price: {price}€</p>
                <section>{description}</section>
            </div>

        </Link >
    )

}
export default ProductsCard