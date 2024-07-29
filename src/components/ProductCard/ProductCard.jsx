import './ProductCard.css'
const ProductCard = ({ id, image, category, description, price, title }) => {

    return (
        <div className="ProductCard">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{category}</p>
            <p>${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard