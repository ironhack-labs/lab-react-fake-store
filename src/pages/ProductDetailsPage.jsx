import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    getData();
  }, [params.productId]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.productId}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  // To fetch the product details, set up an effect with the `useEffect` hook:
  if (product === undefined) {
    return (
      <div>
        <h3>...cargando</h3>
      </div>
    );
  }
  console.log(product);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="product" />
      <p>{product.category}</p>
      <h3>{product.title}</h3>
      <div>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
      </div>
      <Link to={"/"}>Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
