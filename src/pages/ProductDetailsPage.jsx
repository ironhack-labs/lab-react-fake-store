import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage" key={product.id}>
      <div className="card">
        <img
          src={product.image}
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <h3>{product.title}</h3> <br />
        <p>{product.category}</p>
        <h5>{product.price}€</h5>
        <p>{product.description}</p>
        <br />
        <Link to="/">
          {" "}
          <button>Back to shop</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
