import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => console.log(e));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {product === null ? (
        <p>Loading</p>
      ) : (
        <>
          <img src={product.image} />
          <h2>{product.category}</h2>
          <h1>{product.title}</h1>
          <div className="RowContainer">
            <h2>{product.description}</h2>
            <h2 className="price">${product.price}</h2>
          </div>
          <Link to="/">
            <button className="btn-primary">Back</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
