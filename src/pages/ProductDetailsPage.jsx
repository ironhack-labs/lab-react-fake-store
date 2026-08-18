import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const getProduct = async () => {
    try {
      let response = await axios.get(
        "https://fakestoreapi.com/products/" + params["productId"],
      );
      setProduct(response.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div className="product-content">
        <img src={product.image} alt="" />
        <p className="category">{product.category}</p>
        <h2>{product.title}</h2>
        <div>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
        <hr />
        <Link to={"/"}><button>Back</button></Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
