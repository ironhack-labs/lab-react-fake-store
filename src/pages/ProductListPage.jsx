import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="ProductListPage p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`} 
            className="no-underline text-inherit"
          >
            <div className="grid grid-cols-5 items-center border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="col-span-1 flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="col-span-1 text-center font-bold text-lg">
                {product.title}
              </div>
              <div className="col-span-1 text-center text-gray-500">
                {product.category}
              </div>
              <div className="col-span-1 text-center font-semibold text-gray-700">
                ${product.price}
              </div>
              <div className="col-span-1 text-sm text-gray-600">
                {product.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
