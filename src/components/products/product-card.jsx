import "./product-card.css"

function ProductCard({ product }) {
    const summaryDescription = product.description ? product.description.slice(0, 50) + "...": "";
    const { image, title, category, price } = product
    return (
        <div className="d-flex gap-4 border align-items-center p-3">
            <div className="col">
                <img className="img border" src={image} alt={title} width="100" />
            </div>
            <div className="col">
                <h2 className="fw-bolder">{title}</h2>
            </div>
            <div className="col">
                <p> {category}</p>
            </div>
            <div className="col">
                <p>{price} USD</p>
            </div>
            <div className="col">
                <p>{summaryDescription}</p>
            </div>
        </div>
    )
}

export default ProductCard