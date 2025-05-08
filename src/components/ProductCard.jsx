
const ProductCard = ({ image, title, price }) => {

    return (
        <div className="ProductCard card">
            <img src={image} alt="product" />
            <h3>{title}</h3>
            <p>Price: {price}</p>
        </div>
    )
}
export default ProductCard