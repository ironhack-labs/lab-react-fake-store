const ProductCard = ({image, title, category, price, description}) => {

    return(
        <div className="ProductCard">
            <img src={image} alt="" />
            <h2> {title} </h2>
            <p> {category} </p>
            <p> {price} </p>
            <p> {description} </p>
        </div>
    )

}

export default ProductCard