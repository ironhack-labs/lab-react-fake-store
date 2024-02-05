import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const idUrl = "https://fakestoreapi.com/products/";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    axios
      .get(idUrl + productId)
      .then((resp) => {
        console.log(resp.data);
        setProduct(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const { title, price, category, image, description } = product;

  return (
    <>
      <div className="ProductDetailsPage">
        <div>
          <img className="small-image" src={image} alt="product detail" />
        </div>
        <div>{title}</div>
        <div>{price}</div>
        <div>{category}</div>
        <div>{description}</div>
      </div>
      <Link to={"/"}>
        <button className="btn-primary">BACK</button>
      </Link>
    </>
  );
}

export default ProductDetailsPage;
