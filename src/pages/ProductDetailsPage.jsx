import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state variable `product` with the response from the API
        setProduct(data);
      });
  }, [productId]);
  return (
    <div className="ProductDetailsPage">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "20px 40px",
          background: "white",
        }}
      >
        {product && (
          <>
            <img src={product.image} style={{ maxWidth: "300px" }} />
            <h3
              style={{
                background: "blue",
                color: "white",
              }}
            >
              {product.category}
            </h3>
            <h1
              style={{
                fontWeight: "bold",
                maxWidth: "500px",
                flexWrap: "wrap",
              }}
            >
              {product.title}
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                maxWidth: "700px",
              }}
            >
              <p>{product.description}</p>
              <h1 style={{ color: "blue" }}>${product.price}</h1>
            </div>
          </>
        )}
      </div>
      <Link to="/">
        <button style={{ background: "green", color: "white" }}>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;