// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card p-4 border border-gray-200 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link to={`/product/details/${product.id}`}>
        <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
