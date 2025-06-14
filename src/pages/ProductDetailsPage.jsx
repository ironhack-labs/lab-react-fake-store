import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [productId]);

  return (
    <div className="ProductDetailsPage p-6 bg-gray-100 min-h-screen">
      {product.title ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-60 h-60 object-contain mx-auto md:mx-0"
          />

          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

            <p className="text-xl font-semibold text-green-600 mb-2">
              ${product.price}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-bold">Category:</span> {product.category}
            </p>

            <p className="text-gray-600 mb-6 flex-grow">
              <span className="font-bold">Description:</span> {product.description}
            </p>
            <button
              onClick={() => alert("Se ha añadido al carrito")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4 w-max"
            >
              Añadir al carrito
            </button>

            <Link
              to="/"
              className="text-blue-600 hover:underline font-semibold"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading product...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
