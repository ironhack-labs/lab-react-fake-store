import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}

      <div className="mt-32 max-w-2xl mx-auto flex flex-col items-start">
        <img src={product.image} className="w-48 " />
        <p className="mt-6 p-1 text-xs rounded-full bg-green-200">
          {product.category}
        </p>
        <h2 className="font-bold text-xl py-6">{product.title}</h2>
        <div className="flex flex-row space-x-6">
          <p className="py-6 text-xs text-justify">{product.description}</p>
          <p className="py-6 text-2xl font-bold text-green-600">
            ${product.price}
          </p>
        </div>
        <button className="mt-6 py-1 px-4 text-xl rounded-xl bg-green-600 text-white">
          Place into Cart
        </button>
        <Link to="/">
          <button className="mt-6 py-1 px-4 text-sm rounded-md bg-gray-300">
            back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
