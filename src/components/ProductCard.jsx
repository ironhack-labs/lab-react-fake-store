import { Link } from "react-router-dom";

function ProductCard({id, image, title, category, price, description}) {

    return ( 
    <Link to={`/product/details/${id}`} className="ProductCard">
        <img src={image} alt="product image" />
        <div>{title}</div>
        <p>{category}</p>
        <div>{price}</div>
        <div>{description}</div>
    </Link> 
    );
}

export default ProductCard;