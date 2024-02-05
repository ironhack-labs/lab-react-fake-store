import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  const apiUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    console.log("Hello from useEffect-initial render");
    axios
      .get(`${apiUrl}/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("error fetching data:", error);
      });
  }, [productId]);
  console.log(`${apiUrl}/${productId}`);

  return (
    <div>
      <li key={product.id} className="Link">
        <div className="product">
          <img src={product.image}></img>
          <br />
          <strong className="title"></strong> {product.title}
          <br />
          <strong className="price"></strong> {product.price}
          <br />
          <strong className="description"></strong> {product.description}
          <br />
          <strong className="category"></strong> {product.category}
          <br />
          {/* <strong>Rating:</strong> {product.rating.rate} (Count: {product.rating.count})<br /> */}
        </div>
      </li>
    </div>
  );
}

export default ProductDetailsPage;
