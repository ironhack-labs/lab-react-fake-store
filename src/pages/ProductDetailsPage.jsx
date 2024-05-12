import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const navigate = useNavigate();

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  // useEffect(() => {
  //   console.log(product);
  // }, [product]);

  return (
    <div
      className="ProductDetailsPage"
      style={{ margin: "50px", background: "white" }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "25%",
          height: "auto",
          marginBottom: "2em",
          objectFit: "cover",
          aspectRatio : "1 / 1"
        }}
      />

      <div style={{ textAlign: "left", marginBottom: "2em" }}>
        <span
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "0.2em 1em",
            fontWeight: "bold",
            borderRadius: "0.5em",
          }}
        >
          {product.category}
        </span>
      </div>

      <div style={{ textAlign: "left", marginBottom: "2em" }}>
        <h1>{product.title}</h1>
      </div>

      <div style={{ display: "flex", marginBottom: "10em" }}>
        <p style={{ width: "50%", textAlign: "left" }}>{product.description}</p>
        <p
          style={{
            color: "blue",
            fontSize: "x-large",
            fontWeight: "bold",
            paddingLeft: "3.5rem",
          }}
        >
          ${product.price}
        </p>
      </div>

      <button
        style={{
          backgroundColor: "limegreen",
          color: "white",
          borderRadius: "0.5em",
          padding: "0.5em 1em",
        }}
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
