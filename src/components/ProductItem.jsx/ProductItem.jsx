import './ProductItem.css'

export const ProductItem = ({ title, category, price, description, image, id }) => {
    const handleClick = () => {
        window.location.href = `/product/details/${id}`
    }

    return (
        <div className="ProductItem" onClick={handleClick}>
            <img src={image} alt="image" />
            <p>{title}</p>
            <p>{category}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>

    )
}