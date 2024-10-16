import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` stores the product details
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the productId from the URL parameters using useParams
  const { productId } = useParams();

  // Fetch product details using useEffect
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
        setLoading(false); // Set loading to false once the data is fetched
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product details");
        setLoading(false);
      }
    };

    fetchProduct(); // Fetch the product data when component mounts
  }, [productId]); // Re-run the effect if productId changes

  // Show a loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show an error message if the fetch fails
  if (error) {
    return <div>{error}</div>;
  }

  // Render the product details once the data is fetched
  return (
    <div className="ProductDetailsPage container mx-auto p-6">
      {product ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-1/3 object-cover rounded-lg mr-6"
            />

            {/* Product Details */}
            <div>
              <p className="text-lg text-gray-800">{product.description}</p>
              <p className="text-xl font-bold mt-4 text-gray-900">
                Price: ${product.price}
              </p>
              <p className="text-md text-gray-600 mt-2">
                Category: {product.category}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div>No product details available</div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
