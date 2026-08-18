import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage flex flex-col items-center gap-6 px-4 py-8">
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="w-full max-w-3xl"
          >
            <div className="flex flex-col items-center gap-3 rounded-lg bg-white p-6 text-center shadow-md transition hover:scale-[1.01] hover:shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-auto object-contain"
              />

              <p className="text-lg font-semibold text-slate-900">
                {product.title}
              </p>

              <p className="text-sm font-medium capitalize text-slate-500">
                {product.category}
              </p>

              <p className="text-xl font-bold text-emerald-600">
                ${product.price}
              </p>

              <p className="max-w-prose text-sm leading-6 text-slate-600">
                {product.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
