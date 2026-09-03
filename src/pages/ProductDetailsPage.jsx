import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the product details:", error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage px-4 py-6">
      {/* Render product details here */}
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 border rounded-lg shadow-sm p-6">
        <div className="flex-shrink-0 flex justify-center items-center md:w-1/3">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-500 capitalize">{product.category}</p>
          <p className="text-blue-600 font-bold text-lg">${product.price}</p>
          <p className="text-sm text-gray-700">{product.description}</p>
          {product.rating && (
            <p className="text-sm text-gray-500">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
