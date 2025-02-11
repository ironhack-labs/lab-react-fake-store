import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams();


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.log("Error fetching product's details:", error)
      );
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <span>{product.category}</span>
      <h2>{product.title}</h2>
      <div className="product-description">
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
