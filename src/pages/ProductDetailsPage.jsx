import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const URL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  console.log(productId);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  async function fetchProduct() {
    try {
      const response = await axios.get(`${URL}/${productId}`);
      console.log(response);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>No product here!</p>;
  }
  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="image of product" />
      <h2>{product.title}</h2>
    </div>
  );
}

// {
//   id:1,
//   title:'...',
//   price:'...',
//   category:'...',
//   description:'...',
//   image:'...'
// }

export default ProductDetailsPage;
