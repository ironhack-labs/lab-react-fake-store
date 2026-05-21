import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage space-y-6 p-6">
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`} className="block">
          <div className="border p-4 flex flex-row items-center hover:bg-gray-200">
            <img src={product.image} className="w-1/5" />
            <h2 className="w-1/5 font-bold p-6">{product.title}</h2>
            <p className="w-1/5 p-6">{product.category}</p>
            <p className="w-1/5 p-6">${product.price}</p>
            <p className="w-1/5 p-6 text-xs">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
