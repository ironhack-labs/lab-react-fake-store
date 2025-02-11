import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const { productId } = useParams();
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log("Error fetching data from API..", e);
      });
  }, [productId]);
console.log(product.title)
  return (
    <>
      <div className="ProductListPage">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      </div>
    </>
  );
}

export default ProductDetailsPage;
