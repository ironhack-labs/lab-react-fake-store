import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      // Handle success
      setProduct(response.data);
    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
    })
  }, [productId] );

  if (!product) return <p>Loading...</p>;

  return (
    <div className="ProductDetailsPage">
    <h1>{product.title}</h1>
    <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />
    <p><strong>Category:</strong> {product.category}</p>
    <p><strong>Price:</strong> ${product.price}</p>
    <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
