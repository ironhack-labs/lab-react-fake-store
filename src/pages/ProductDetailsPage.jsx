import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {

  const [product, setProduct] = useState({});



  const { productId } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error fetching product details:", error);
      });
  }, [productId]); 



  return (
    <div className="ProductDetailsPage">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            {/* Category */}
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-4">
              {product.title}
            </h1>

            {/* Price */}
            <p className="text-3xl font-bold text-blue-600 mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Rating (if available) */}
            {product.rating && (
              <p className="text-sm text-gray-600">
                ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
