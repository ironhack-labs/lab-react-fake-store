import { Link } from "react-router-dom";

function ProductItem({ product }) {
    return (
        <Link to={`/product/details/${product.id}`}>
            <li className="card  flex-center">
                <img
                    src={product.image}
                    width={120}
                    className="content shifted"
                />
                <p className="content shifted">
                    <strong>{product.title}</strong>
                </p>
                <p className="content shifted">{product.category}</p>
                <p className="content shifted">${product.price}</p>
                <p className="content shifted">{product.description}</p>
            </li>
        </Link>
    );
}

export default ProductItem;
