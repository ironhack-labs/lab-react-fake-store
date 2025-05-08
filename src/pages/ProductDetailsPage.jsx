import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

// function ApartmentDetailsPage() {
//   const { apartmentId } = useParams();

//   const apartmentProfile = data.find(
//     (apartment) => apartment.id === apartmentId
//   );

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},

  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [fetching, setFetching] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.

  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  const apiURL = `https://fakestoreapi.com/products/${productId}`;

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setProduct(response.data);
      setFetching(false);
    });
  }, [apiURL]);

  if (fetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="apartment" />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>$ {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
