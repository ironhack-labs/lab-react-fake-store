import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  const { productId } = useParams();
  // You can access it with the `useParams` hook from react-router-dom.

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  return (
    <div className="ProductDetailsPage">
      <div className="ProductDetailsPage">
        <div>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>${product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
