import { useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!product) {
    return <p>Product not found</p>; 
  }


  return (
    <div className="ProductDetailsPage p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="flex items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain mr-4"
        />
        <div>
          <p className="text-gray-500 mb-2">Category: {product.category}</p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Price: ${product.price}
          </p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;



