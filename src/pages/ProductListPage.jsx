import { useEffect, useState } from "react";
import * as ProductsService from "../services/products-service";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    ProductsService.getAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Problemas en el paraiso:", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Nuestros Productos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (

            <Link
              key={product.id}
              to={`/product/details/${product.id}`} 
              className="group bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Contenedor de la imagen */}
              <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg p-2 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Información del producto */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
                    {product.category}
                  </span>
                  
                  <h2 className="text-sm font-medium text-gray-700 line-clamp-2 mt-1 mb-2 h-10 group-hover:text-indigo-600 transition-colors">
                    {product.title}
                  </h2>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price.toFixed(2)}€
                  </span>
                  <span className="text-xs bg-gray-900 group-hover:bg-indigo-600 text-white font-medium py-1.5 px-3 rounded-lg transition-colors">
                    Ver detalle
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
