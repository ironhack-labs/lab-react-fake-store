import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        //with fetch you always have to return the second promise, convert it to json
        return response.json();
      })
      .then((data) => {
        console.log("here is the data: ", data);
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="detail-card" key={product.id}>
        <img src={product.image} alt={product.title} />
        <p className="category">{product.category}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <div className="price">
        <p>{product.price} USD</p>
      </div>
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
