import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const URL = "https://fakestoreapi.com/products";
  const params = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  async function fetchProductDetails() {
    try {
      const response = await axios.get(`${URL}/${params.productId}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <li className="card flex-center">
        <img width={150} src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.price} €</p>
        <p>{product.description}</p>
      </li>
      <Link to="/">
        <button className="btn-primary">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
