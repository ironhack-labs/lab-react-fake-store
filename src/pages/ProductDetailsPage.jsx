import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const nav = useNavigate();
  //go back function
  const handleBack = () => {
    nav("/");
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log("We made it to the then block, ", response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log("there was an error with one product", err));
  }, [productId]);
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div className="ProductDetailsPage">
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "300px" }}
      />
      <h3>{product.title}</h3>
      <Link to="/">back</Link>
      {/* <button onClick={handleBack}>Back</button> */}
    </div>
  );
}

export default ProductDetailsPage;
