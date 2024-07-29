import './ProductCard.css'

const ProductCard = (elm) => {
    const { image, title, category, price, description } = elm
    return (
        <article className="ProductCard">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{category}</p>
            <p>${price}</p>
            <p className='description'>{description}</p>


        </article>
    )
}

export default ProductCard