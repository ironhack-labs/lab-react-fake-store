import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const {productId} = useParams()
  console.log(productId)
  const [product, setProduct] = useState({});


    useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err)
      } 
    };

    fetchProduct();
  }, [productId]);



  return (
    <div className="ProductDetailsPage">
     <div className="flex flex-col gap-6 items-start bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain mx-auto"
        />
        <div className="flex-1">
          <h2 className="text-2xl mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
