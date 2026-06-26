import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ProductsService from "../services/products-service";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    setLoading(true);
    ProductsService.getProductById(productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Problemas en el paraiso:", error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12 text-red-500">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <div className="ProductDetailsPage">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Botón de volver atrás */}
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-8 transition-colors"
        >
          ← Volver a la tienda
        </Link>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Lado Izquierdo: Imagen del Producto */}
          <div className="w-full h-80 flex items-center justify-center bg-gray-50 rounded-xl p-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain mix-blend-multiply"
            />
          </div>

          {/* Lado Derecho: Información */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {product.title}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Precio
                </span>
                <span className="text-3xl font-extrabold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors text-sm">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
