import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductListPage.css"
import fetchItemDetails from "../fetchItemDetails";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  async function callFetchItemDetails(productId) {
    const apiResponse = await fetchItemDetails(productId);
    setProduct(apiResponse);
  }  

  useEffect(()=>{
      callFetchItemDetails(productId);
  }, [])

  // To fetch the product details, set up an effect with the `useEffect` hook:

  //console.log(product);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <p>{product.category}</p>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">
      <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
