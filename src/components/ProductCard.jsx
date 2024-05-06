const ProductCard = ({ id, image, title, price, description, category }) => {

    return (
        <div className="card">
            <img src={image} alt="product" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
        </div>
    )
}

export default ProductCard;