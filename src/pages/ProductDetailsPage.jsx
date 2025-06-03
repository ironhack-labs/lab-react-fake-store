import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    // Fetch specific product from the Fake Store API
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log("Product details fetched:", response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [productId]); // Effect runs when productId changes

  if (loading) {
    return (
      <div className="ProductDetailsPage">
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="text-center">
            <p className="text-xl">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product.id) {
    return (
      <div className="ProductDetailsPage">
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="text-center">
            <p className="text-xl text-red-600">Product not found</p>
            <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ProductDetailsPage">
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          ← Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <img 
                src={product.image} 
                alt={product.title}
                className="max-w-full h-96 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full capitalize mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-blue-600">
                  ${product.price}
                </span>
                {product.rating && (
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xl">★</span>
                    <span className="text-lg text-gray-600 ml-1">
                      {product.rating.rate}
                    </span>
                    <span className="text-gray-500 ml-2">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-6">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;