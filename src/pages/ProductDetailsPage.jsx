import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function ProductDetailsPage() {
  const {productId} = useParams();
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
     <div className="ProductDetailsPage">
      {product && (
        <>
    <h3>{product.title}</h3>
    <img src={product.image} alt={product.title} />
    <p>{product.price}</p>
    <p>{product.desctiption}</p>
    <p>{product.category}</p>
    <p>{product.rating.rate} {product.rating.count}</p>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
