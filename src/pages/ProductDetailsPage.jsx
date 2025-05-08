import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.error("Error", error);
    });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    {product ? (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} style={{ width: "200px" }} />
        </>
      ) : (
        <p>Loading product details</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
