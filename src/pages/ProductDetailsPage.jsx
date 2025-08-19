import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailItem from "../components/ProductDetailItem";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // To fetch the product details, set up an effect with the `useEffect` hook:
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    getData();
  }, [productId]);

  const getData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  if (product === null) {
    return <h3 className="font-extrabold">Loading...</h3>
  }

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <ProductDetailItem product={product} />
    </div>
  );
}

export default ProductDetailsPage;
