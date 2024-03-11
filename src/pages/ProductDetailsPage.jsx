import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );

      const parsedResponse = await response.json();

      setProduct(parsedResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading....</p>;
  }

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div>
        <img src={product.image} alt="image of product" />
        <p>{product.category}</p>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <hr />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
