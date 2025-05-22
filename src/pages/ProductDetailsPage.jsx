import axios from "axios";
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
    getData();
  }, [productId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.image} width={150} />
      <h3>{product.category}</h3>
      <hr />
      <br />
      <p>{product.description}</p>
      <br />
      <h3>{product.price}</h3>
      <Link to={"/"}>
        <button style={{backgroundColor: "blue", borderRadius: "15px", color: "white"}}>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
