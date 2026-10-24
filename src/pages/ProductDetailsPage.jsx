import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  // The `productId` comes from the URL: /product/details/:productId
  const { productId } = useParams();

  // Fetch the product details every time the `productId` changes
  useEffect(() => {
    axios
      .get(`${API_URL}/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [productId]);

  if (!product.id) {
    return <p className="p-8 text-gray-500">Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage max-w-3xl mx-auto p-8 flex flex-col items-start gap-4 text-left">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-auto object-contain self-center"
      />
      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full capitalize">
        {product.category}
      </span>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <div className="flex w-full justify-between items-start gap-8">
        <p className="text-gray-600">{product.description}</p>
        <span className="text-xl font-bold text-blue-600">${product.price}</span>
      </div>
      <Link to="/">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
