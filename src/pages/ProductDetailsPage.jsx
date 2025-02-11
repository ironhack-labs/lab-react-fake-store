import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
const {productId} = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json); 
        setProduct(json); 
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!product.title) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="ProductListPage">
      <div className="product-list">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-title">{product.title}</p>
        <button><Link to={"/"}>Back</Link></button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;