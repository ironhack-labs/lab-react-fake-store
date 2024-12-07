import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <Link to={`/product/details/${product.id}`}>
            <div className="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg">
                <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-lg font-medium text-gray-900">{product.price}</p>
                    <p className="text-sm text-gray-700">{product.description}</p>
                </div>
            </div> 
        </Link>
    );
}

export default ProductCard;