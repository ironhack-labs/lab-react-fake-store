import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ProductDetailsPage.css"


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  console.log(productId);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setProduct(jsonData)

      })
      .catch((error)=>{
        console.log(error);
      })

  }, [])


  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <h2>{product.description} {product.price} </h2>


    </div>
  );
}

export default ProductDetailsPage;
