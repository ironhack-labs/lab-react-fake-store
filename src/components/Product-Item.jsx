import { Link } from "react-router-dom";

function ProductItem({ product }) {
    return (
        <Link to={`/product/details/${product.id}`}>
            <div className="card mb-3" style={{ maxWidth: "200px" }} key={product.id}>
                <div className="row g-0">
                    <div className="col-md-4 border-2 p-1">
                        <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title font-semibold">{product.title}</h5>
                            <p className="product-category"><small>{product.category}</small></p>
                            <p className="card-text"><small>{`$${product.price}`}</small></p>
                            <p className="card-text"><small>{product.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;