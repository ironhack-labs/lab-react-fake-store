import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then(({data}) => {
      // Handle success
      // console.log(data);
      setProduct(data)
    })
    .catch((error) => {
      // Handle error
      // console.log(error);
    })
  }, [productId] );


  return (
    <div className="ProductDetailsPage spacing-md card">
      <img src= {product.image} alt={product.title} width="300" />
      <p>{product.category}</p>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
