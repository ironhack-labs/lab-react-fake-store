import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    async function getOneProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await res.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div className="product-detail-card">
        <img alt="something" src={product.image} />
        <p className="category">{product.category}</p>
        <h2>{product.title}</h2>
        <p className="price">Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
