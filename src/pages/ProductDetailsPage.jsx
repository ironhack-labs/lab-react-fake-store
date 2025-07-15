import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(BASE_URL + "/products/" + productId)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div className="product-detail-page">
      <div className="product-detail">
        <img src={product.image} className="product-detail-image"></img>
        <div className="product-detail-category">{product.category}</div>
        <div className="product-detail-title">{product.title}</div>
        <div className="product-detail-description-price-container">
          <div className="product-detail-description">{product.description}</div>
          <div className="product-detail-price">${product.price}</div>
        </div>
        <Link to='/'>
          <button className="product-details-back-button">Back</button>
        </Link>
      </div>
    </div>
    </>

    // Object.entries(product).map(([key, value]) => {
    //   if (key === "image") {
    //     return (
    //       <div key={key}>
    //         <p className="card">
    //           {key}:<br />
    //         </p>
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div key={key}>
    //         <p className="card">
    //           {key}: {String(value)}
    //         </p>
    //       </div>
    //     );
    //   }
    // })
  );
}

export default ProductDetailsPage;
