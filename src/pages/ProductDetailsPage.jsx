import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data)

      })
      .catch((e) => console.log("failure", e))
  }, [productId])

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">

      <img src={product.image} alt="product image" />
      <p id="category">{product.category}</p>
      <p> <b>{product.title}</b></p>
      <p>{product.description}</p>
      <p id="price"><b>${product.price}</b></p>

      <Link to="/">
                <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
