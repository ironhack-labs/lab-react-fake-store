import './ProductCard.css'

const ProductCard =({_id, image, title, price, category})=>{
    return(
        <div className="productContainer card">
            <div className='img-box'>
                <img src={image} alt="product"/>
                <h2>{title}</h2>
            </div>
            <div className='description-box'>
                <p>Price: {price}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    )
}
export default ProductCard