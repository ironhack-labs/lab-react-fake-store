import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const currentLink = `https://fakestoreapi.com/products/${productId}`;
  useEffect(() => {
    axios
      .get(currentLink)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ProductDetailsPage">
      product !== null ? (
      <div>
        <div className="imgContainer">
          <img src={product.image} alt="Description" />
        </div>
        <div className="infoContainer">
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
        </div>
        <button>add to cart</button>
      </div>
      ) : (<p>No data found</p>)
    </div>
  );
}

export default ProductDetailsPage;
