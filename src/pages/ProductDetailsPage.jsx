import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProduct();
}, [])

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      {product ? (
        <div>
          <img src={product.image}/>
          <h1>{product.title}</h1>
        </div>
      ) : (
        <p>...loading</p>
      )
      }
    </div>
  );
}

export default ProductDetailsPage;
