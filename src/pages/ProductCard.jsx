const ProductCard = ({ image, title, id, price, description, category, rate, count }) => {

    return (
        <div>
            <img src={image} />
            <p>title: {title}</p>
            <p>id: {id} </p>
            <p>price: {price} </p>
            <p>description: {description} </p>
            <p>category: {category} </p>
            <p>rate: {rate} </p>
            <p>count: {count} </p>

        </div>
    )
}
export default ProductCard

