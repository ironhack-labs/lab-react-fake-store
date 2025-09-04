import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // if (product.id !== productId) {
  //   return <p>product not find!</p>;
  // }

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const singleProduct = await response.json();
        console.log(singleProduct);

        setProduct(singleProduct);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);

  return (
    <div className="ProductDetailsPage" style={{ background: "#eee" }}>
      {product && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px",
            alignItems: "flex-start",
            border: "2px solid #eee",
            boxShadow: "0px 2px 3px grey",
            background: "#fff",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "250px",
              border: "2px solid #eee",
              backgroundImage: `url(${product.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          <div
            style={{
              background: "blue",
              color: "#fff",
              fontSize: "15px",
              textAlign: "left",
              padding: "2px 10px",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          >
            {product.category}
          </div>
          <h1 style={{ margin: "30px 0" }}>{product.title}</h1>
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "40px",
              paddingBottom: "50px",
              borderBottom: "1px solid #eee",
            }}
          >
            <span style={{ width: "500px", textAlign: "left" }}>
              {product.description}
            </span>
            <span
              style={{ color: "blue", fontSize: "18px", fontWeight: 700 }}
            >{`$${product.price}`}</span>
          </div>
          <NavLink to={"/"} style={{ alignSelf: "center" }}>
            <button
              style={{
                background: "green",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                marginTop: "30px",
              }}
            >
              Back
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
