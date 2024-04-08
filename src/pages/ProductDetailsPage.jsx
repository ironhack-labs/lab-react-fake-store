import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        setProduct(jsonData);
        console.log("Json data is fetched", jsonData);
      } else {
        throw new Error("Failed to fetch data response isn't ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {
        <>
          <div key={product.id}>
            <img src={product.image} alt="" />
            <span>{product.category}</span>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          <Link to={"/"}>
            <button type="button">Back</button>
          </Link>
        </>
      }
    </div>
  );
}

export default ProductDetailsPage;
