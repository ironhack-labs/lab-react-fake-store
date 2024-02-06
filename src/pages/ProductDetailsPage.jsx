import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {

  const [product, setProduct] = useState({});

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
