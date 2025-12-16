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
  useEffect(() => {
    // Make a GET request to fetch the details of a single product
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        // Convert the response to JSON format
        return response.json();
      })
      .then((data) => {
        // Save the product details in the state
        setProduct(data);
      })
      .catch((error) => {
        // Handle any errors from the request
        console.log(error);
      });
  }, [productId]); // Re-run the effect if the productId changes

  // Show a loading message while the product data is being fetched
  if (!product.title) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div className="card">
        {/* Product image */}
        <img src={product.image} alt={product.title} style={{ height: 200 }} />
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>{product.price} €</p>
        <p>{product.description}</p>

        {/* Navigation back to the product list */}
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
