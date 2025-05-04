import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((e) => console.error(e));
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div key={product.id} className="ProductDetailsPage card flex-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-cover"
      />
      <h2 className="font-bold text-xl">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-gray-500">{product.description}</p>
      <br />
      <Link className="btn btn-primary" to="/">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
