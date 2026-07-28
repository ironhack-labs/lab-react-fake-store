import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  const navigate = useNavigate();


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);


  return (
    <div className="ProductDetailsPage container">
    {/* Render product details here */}
      <div className="bg-white rounded-lg shadow p-6 text-left">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-40 object-contain mb-4"
        />
        <span className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded mb-4">
          {product.category}
        </span>
        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
        <div className="flex justify-between items-start gap-6 mb-4">
          <p className="text-gray-600">{product.description}</p>
          <span className="text-indigo-600 font-bold whitespace-nowrap">
            ${product.price}
          </span>
        </div>
        <hr className="mb-4" />
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
