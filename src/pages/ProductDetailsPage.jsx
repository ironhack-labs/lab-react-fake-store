import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [fetching, setFetching] = useState(true);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const apiURL = `https://fakestoreapi.com/products/${productId}`;

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProduct(response.data);
      setFetching(false);
    });
  }, [apiURL]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {fetching ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain p-4"
          />
          <div className="p-6">
            <h3 className="text-2xl font-medium mb-4">{product.title}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-blue-600">
              Price: ${product.price}
            </p>
            <p className="text-gray-500 mt-2">Category: {product.category}</p>
          </div>
          <div className="p-6">
            <Link to="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Back to Products
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
