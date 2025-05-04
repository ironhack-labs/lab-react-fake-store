import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  let { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (response.ok) {
          const singleProduct = await response.json();
          console.log(singleProduct);
          setProduct(singleProduct);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProduct();
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} style={{ maxWidth: "12%" }} alt="" />
      <p>{product.category}</p>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
