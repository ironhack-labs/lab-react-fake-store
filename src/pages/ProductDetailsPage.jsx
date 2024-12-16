import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  const { productId } = useParams(); // Correctly extract productId

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const oneProductData = await response.json();
        console.log(oneProductData); // Ensure the response data is correct
        setProduct(oneProductData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getOneProduct();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div className="card">
        <div>
          <img src={product.image} alt={product.title} className="image" />
        </div>
        <div>{product.title}</div>
        <div>{product.category}</div>
        <h4>${product.price}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
export default ProductDetailsPage;
