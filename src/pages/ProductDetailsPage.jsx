import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId}=useParams()
  const productDetail = setProduct.find((product) => product.id === productId);

  async function getProductsDetails() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/:id");

      const jsonResponse = await response.json();
      setProduct(jsonResponse);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsDetails();
  }, []);

 

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      {productDetail && (
        <>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </>
      )}
    </div>
  );}

export default ProductDetailsPage;
