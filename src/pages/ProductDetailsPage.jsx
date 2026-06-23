import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage container py-8">
      {product.id && (
        <div className="card bg-white max-w-3xl mx-auto text-left flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full md:w-1/2 object-contain"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-blue-600 text-xl font-bold">${product.price}</p>
            <p className="text-gray-600 capitalize">{product.category}</p>
            {product.rating && (
              <p className="text-sm text-gray-500">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            )}
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
