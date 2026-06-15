import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="ProductDetailsPage container mx-auto px-4 py-8 max-w-3xl">
      {product.id && (
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-8">
          <div className="flex items-center justify-center md:w-1/3">
            <img
              src={product.image}
              alt={product.title}
              className="h-56 object-contain"
            />
          </div>
          <div className="flex flex-col md:w-2/3">
            <span className="text-xs uppercase text-gray-400 tracking-widest mb-2">{product.category}</span>
            <h1 className="text-xl font-bold mb-3">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 font-bold">★ {product.rating?.rate}</span>
              <span className="text-gray-400 text-sm">({product.rating?.count} reviews)</span>
            </div>
            <p className="text-2xl font-bold text-blue-700 mb-6">${product.price}</p>
            <Link to="/">
              <button className="btn-secondary">← Back</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;