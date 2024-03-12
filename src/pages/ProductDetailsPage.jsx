import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
const {productId} = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
useEffect(() => {
  const fetchProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    setProduct(data);
  };

  fetchProduct();
}, [productId]);

 if (!product) return <div>Loading...</div>;

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
