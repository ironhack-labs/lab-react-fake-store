import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();

  console.log(params);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  async function fetchOneProduct() {
    try {
      const response = await axios.get(`${URL}/${params.productId}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOneProduct();
  }, [params]);

  if (!product) {
    return <p>Loading</p>;
  }
  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
