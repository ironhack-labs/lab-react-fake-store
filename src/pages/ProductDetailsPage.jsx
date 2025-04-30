import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) =>{
        setProduct(response.data)
      })
      .catch((err) => {
        console.log("Error fetching product:", err);
      });
  }, [productId]);

  


  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={product.image}
          alt={`Image of ${product.title}`}
          className="w-64 h-64 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-2">${product.price}</p>
          <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-sm text-gray-600">Rating: ⭐ {product.rating?.rate} ({product.rating?.count})</p>
        </div>
      </div>
    </div>
  );
}


export default ProductDetailsPage;
