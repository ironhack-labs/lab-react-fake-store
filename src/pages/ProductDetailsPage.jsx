import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        return setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.productId]);

  // Styles
  const conainerStyles = {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "24px",
    padding: "16px",
    gap: "12px"
  }
  return (
    <div className="ProductDetailsPage" style={conainerStyles}>
      {/* Render product details here */}
      <img src={product.image} alt={product.title} width="72px"/>
      <p>{product.category}</p>
      <h2>{product.title}</h2>
      <div>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <Link to="/" className="btn-secondary">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
