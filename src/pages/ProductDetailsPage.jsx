import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  // Iteration 3: Get productId from URL params
  const { productId } = useParams();

  // Fetch product details when productId changes
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="p-8 max-w-2xl mx-auto">
        <Link to="/" className="text-blue-500 hover:underline mb-4 block">
          &larr; Back to products
        </Link>
        {product.id && (
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-48 h-48 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-500 mb-2 capitalize">{product.category}</p>
              <p className="text-lg font-semibold text-green-600 mb-4">
                ${product.price}
              </p>
              <p className="text-gray-700">{product.description}</p>
              <p className="mt-4 text-yellow-500">
                Rating: {product.rating?.rate} / 5 ({product.rating?.count} reviews)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
