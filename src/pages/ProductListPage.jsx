import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const apiURL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      console.log("Fetched");
      setFetching(false);
    });
  }, []);

  console.log(products);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 gap-8">
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id} className="border rounded-lg p-8 flex flex-row items-center bg-white shadow-sm">
            <img src={product.image} alt={product.title} className="h-24 object-contain mb-4" />
            <h2 className="text-lg font-semibold text-center mb-1">{product.title}</h2>
            <p className="text-lg font-bold">${product.price}</p>
            <p className="text-gray-600 text-sm text-center mb-5">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
