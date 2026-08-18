import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage mx-auto mt-10 max-w-2xl rounded-lg bg-white p-8 text-center shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto h-64 w-auto object-contain"
      />

      <p className="mt-6 text-sm capitalize text-slate-500">
        {product.category}
      </p>

      <h1 className="mt-2 text-2xl font-bold text-slate-900">
        {product.title}
      </h1>

      <p className="mt-4 text-slate-600">{product.description}</p>

      <p className="mt-4 text-xl font-bold text-emerald-600">
        ${product.price}
      </p>

      <button
        className="mt-6 rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
