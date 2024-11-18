import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  //console.log(oneProductId);
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    async function getOneProduct() {
      console.log("inside the detail page");
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        console.log("one product", data);
        setProduct(data);
      } catch (error) {}
    }
    getOneProduct();
    //this is less common but when the component is destroy or unmounted then you return a function
    return () => {
      console.log("unmounted");
    };
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div className="productListPage">
        <div className="detailPage">
          <img src={product.image}></img>
          <h1 className="titleDetail">{product.title}</h1>
          <p className="categDetail">{product.category}</p>
          <p className="priceDetail">{product.price}</p>
          <p className="prodDescDetail">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
