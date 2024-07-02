import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { productId } = useParams()


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {

      if (!response.status === 200) {
        throw new Error("Server response not ok");
      }

      const data = response.data;
      console.log(data);

      setProduct(data);

    })
    .catch((error) => {
      console.log("error: ", error);
    });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="card productDetailCard">
        <img src={product.image} className="productImg" />
        <div className="label">{product.category}</div>
        <h2>{product.title}</h2>
        <div className="productDetailText">
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
        <hr />
        <div className="flex-center">
          <Link to="/">
            <button className="btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
