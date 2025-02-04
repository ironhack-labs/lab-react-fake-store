import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isFetched, setIsFetched] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(product);
        console.log("Fetched");
        setIsFetched(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <img src={product.image} alt={product.title} className="w-48 h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
          <p className="text-lg text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2 w-80">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
