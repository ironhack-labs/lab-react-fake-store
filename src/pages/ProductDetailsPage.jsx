//ITERATION 03 - SETTING THE PRODDETAILS page
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [fetching, setFetching] = useState(true);
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(1);
  // Iteration 03 - request api data for the product details
  const apiProdUrl = `https://fakestoreapi.com/products/${productId}`;
  //we know from the api that the last part of url is the productID so we make this dynamic, remember backticks ``

  //output example:
  // [
  //   {
  //   id:1,
  //   title:'...',
  //   price:'...',
  //   category:'...',
  //   description:'...',
  //   image:'...'
  // },
  // ]

  // To fetch the product, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("product details - useEffect initial mounting");
    axios.get(apiProdUrl).then((response) => {
      //once request done, take the response and set that data on the products state variable
      setProduct(response.data);
      //as soon as we receive response, loading is not true anymore
      setFetching(false);
    });
  }, [apiProdUrl]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // //iteration 02 and 03 - connecting the product detail page to a specific project
  // // Find the current product by id
  // // This could be a URL parameter from React Router,
  // //in app.jsx <Route path="/product/details/:productId"
  // //To access the URL parameters from the browser's URL bar, use the React Router hook useParams.

  // let { productId } = useParams();
  // const productDetails = product.find((product) => product.id === productId);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <h3>Product Details</h3>
      {fetching && <p>Loading details...</p>}

      {/* //this is how we will display the data received from api using .map() */}
      {product && (
        <div key={product.id} className="card">
          <img src={product.image} alt="product image" />
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          {/* Back button */}
          <NavLink to="/">
            <button className="button-back">Back</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
