const ProductCard = ({ image, id, title, description, price, category, rating }) => {

    /* const productStyle = {
         background: rating >= 95 ? '#e0ffbb' : 'white'
     }style = { productStyle }*/

    return (
        <div className="ProductCard" >
            <img src={image} alt={image} />
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>{rating.rate}</p>
        </div>

    )

}

export default ProductCard