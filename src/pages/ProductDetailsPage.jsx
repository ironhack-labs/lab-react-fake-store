import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const {productId} = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => setProduct(response.data))
    .catch((error) => console.log(error));
  }, [productId])

  return (
    <div className="ProductDetailsPage flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-40 h-40 object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
      <div className="flex-1">
          <p className="text-xs text-gray-500">{product.category}</p>
          <h2 className="text-2xl font-semibold text-gray-900">{product.title}</h2>
          <p className="text-sm text-gray-700 mt-2">{product.description}</p>
          <p className="text-xl font-bold text-blue-700 mt-4">{product.price}</p>
          <Link to="/" className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">Back</Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
