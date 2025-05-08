import { Link } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";


const ProductCard = ({ category, description, id, image, price, rating, title }) => {

    return (

        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{category}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>

    )

}

export default ProductCard