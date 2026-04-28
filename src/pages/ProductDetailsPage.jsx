import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  if (!product.title) {
    return <h3> Loading ... </h3>;
  }

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}

      <div className="card">
        <h2>Product Details</h2>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} height="200px" />
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
