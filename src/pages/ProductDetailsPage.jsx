import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://fakestoreapi.com";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage container py-8">
      <article className="rounded-lg bg-white p-8 text-left shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-64 rounded border object-contain"
        />

        <p className="mt-4 inline-block rounded bg-blue-600 px-3 py-1 text-sm text-white">
          {product.category}
        </p>

        <h1 className="mt-5">{product.title}</h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <p className="max-w-2xl leading-relaxed">{product.description}</p>
          <p className="text-2xl font-bold text-blue-700">${product.price}</p>
        </div>

        <div className="mt-14 border-t pt-5 text-center">
          <Link to="/">
            <button className="rounded bg-green-500 px-5 py-2 text-white transition-colors hover:bg-green-600">
              Back
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default ProductDetailsPage;
