import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  
  // To fetch the product details, set up an effect with the `useEffect` hook:
  
  const { productId } = useParams();
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <div className="container">
        {product.id ? (
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    ${product.price}
                  </p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
