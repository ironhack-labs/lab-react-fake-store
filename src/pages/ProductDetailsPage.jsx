import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const urlSingleProduct = `https://fakestoreapi.com/products/${productId}`;

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(urlSingleProduct)
      .then((resp) => {
        return resp.json();
      })
      .then((dataSingleProduct) => {
        setProduct(dataSingleProduct);
      });
  }, []);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div>
      <div className="ProductDetailsPage">
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
