import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ProductDetails.css"
import { NavLink } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const {productId} = useParams()
  const apiUrl = `https://fakestoreapi.com/products/${productId}`
  const [product, setProduct] = useState({});


  async function getProduct() {

    try {
      const response = await fetch(apiUrl);
      const jsonResponse = await response.json();

      setProduct(jsonResponse)
    } catch (error) {
      console.log('There was an error ', error)
    }
  }

  useEffect(() => {
    getProduct();
  }, [productId]);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <>
      <div className="ProductDetailsPage">
        <img width={"150px"} src={product.image} alt={product.title} />
        <p className="category">{product.category}</p>
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
      </div>
    </>
  );
}

export default ProductDetailsPage;
