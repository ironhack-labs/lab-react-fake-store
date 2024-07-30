import './ProductCard.css'
import { Link } from 'react-router-dom'

export const ProductCard = ({eachProduct}) => {
    return(
        <li className="card">
            <img src={eachProduct.image} alt="" />
            <p id="title">{eachProduct.title}</p>
            <p>{eachProduct.category}</p>
            <p>${eachProduct.price}</p>
            <p id="description">{eachProduct.description}</p>
        </li>
    )
}