import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState({});

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
      <img src={product.image} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>$ {product.price}</p>
      <p>{product.description}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
