import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const apiURL = `https://fakestoreapi.com/products/${productId}`;
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // const productProfile = apiURL.find((product) => product.id === productId);
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch(apiURL)
      .then((resp) => {
        return resp.json();
      })
      .then((dataSingleProduct) => {
        setProduct(dataSingleProduct);
      });
  }, []);

  return (
    <div>
      <div className="ProductDetailsPage container card">
        <img src={product.image} />
        <p className="blue-background">{product.category} </p>
        <h3>{product.title}</h3>
        <br></br>
        <div className="flex-price">
          <p>{product.description}</p>
          <p className="price-tag">${product.price}</p>
        </div>
      </div>
      <NavLink to="/">
        <button className="back-btn">Back</button>
      </NavLink>
    </div>
  );
}

export default ProductDetailsPage;
