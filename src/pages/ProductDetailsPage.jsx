import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  // const fetchProductDetail = async () => {
  //   try {
  //     const resp = await fetch(
  //       `https://fakestoreapi.com/products/${productId}`
  //     );
  //     const data = await resp.json();
  //     setProduct(data);
  //   } catch (error) {}
  // };

  const fetchProductDetail = async () => {
    try {
      const { data } = await axios( // axios doesn't need a 2nd promise. axios has the data in a 'data' key
        `https://fakestoreapi.com/products/${productId}`
      ); 
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]); //  <-- The effect will run every time the `productId`` changes

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <ProductCard product={product} />
      <Link to="/">
        <button className="btn-primary">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
