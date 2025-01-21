import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="ProductDetailsPage">
      <div className="container-sm m-2">
        <div className="container d-flex flex-column align-items-start">
          <img
            className=" img-fluid border rounded mb-3"
            src={product.image}
            alt="..."
            style={{ height: "20rem", objectFit: "contain" }}
          />
          <p className="fw-medium btn btn-primary">{product.category}</p>
          <h3 className="fw-bold h3 mt-4">{product.title}</h3>
        </div>
        <div className="container d-flex justify-content-start">
          <p className="fw-medium text-start">{product.description}</p>
          <p className="fw-bold h3 text-primary">${product.price}</p>
        </div>
      </div>
      <div className="border-top d-flex justify-content-center">
        <Link to={"/"} className="mt-3">
          <button className="btn btn-success">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
