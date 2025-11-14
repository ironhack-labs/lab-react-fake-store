import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log(productId)
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(prodData => setProduct(prodData))
  }, [productId])



  return (
    <div className="ProductDetailsPage">
      <article className="flex flex-col items-start g-5 p-5 card">
            <img src={product.image} className="w-40 border-4 my-4" />
            <span className="bg-blue-700 font-bold text-white px-2 my-2">{product.category}</span>
            <h3 className="font-bold my-2" >{product.title}</h3>
            <div className="flex gap-40">
            <p className="text-left w-80">{product.description}</p>
            <span className="text-blue-700 font-bold">${product.price}</span>
            </div>
      </article> 
    </div>
  );
}

export default ProductDetailsPage;
