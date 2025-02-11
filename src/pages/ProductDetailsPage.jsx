import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  const { productId } = useParams();

  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  if (product === null) {
    return "Loading...";
  }
  return (
    <div className="ProductDetailsPage">
      <div className="detailCard">
        <div className="detailPageImage">
          <img src={product.image} alt={product.title} style={{ width: 200 }} />
        </div>
        <div className="ProductDetailsContainer">
          <p
            style={{
              backgroundColor: "rgb(63, 63, 245)",
              color: "white",
              padding: 5,
              marginBottom: 20,
            }}
          >
            {product.category}
          </p>
          <h1>{product.title}</h1>

          <div
            style={{ display: "flex", width: 600, gap: 100, textAlign: "left" }}
          >
            <p className="detailPageDescription">{product.description}</p>
            <p className="detailPagePrice">${product.price}</p>
          </div>
        </div>
      </div>
      <hr />
      <NavLink to="/">
        <button className="back-btn">Back</button>
      </NavLink>
    </div>
  );
}

export default ProductDetailsPage;
