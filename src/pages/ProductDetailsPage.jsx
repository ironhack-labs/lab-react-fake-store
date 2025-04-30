import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/useFetch";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  // const [isLoading, setIsLoading] = useState(true);
  // const [product, setProduct] = useState({});
  const { productId } = useParams();

  const apiURL = `https://fakestoreapi.com/products/${productId}`;
  const { data: product, loading: isLoading, error } = useFetch(apiURL);
  console.log(product);

  // useEffect(() => {
  //   // Fetch product details from the Fake Store API

  //   axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) => {
  //     setProduct(response.data)
  //     setIsLoading(false)
  //   })

  // }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="productDetailsPage">
      {isLoading && <p>Loading....</p>}
      {!isLoading && product && (
        <>
          <img src={product.image} alt={product.title} />
          <p className="category">
            <span>{product.category}</span>
          </p>
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <hr />
          <Link to="/">
            <button className="backButton">Back</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
