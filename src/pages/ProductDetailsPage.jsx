import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams();
  /* console.log(params) */


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      setProduct(response)
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image} alt="" />
    <p>{product.title}</p>
    <p>{product.category}</p>
    <p>{product.price}</p>
    <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
