import { useState, useEffect } from "react";
import "../some.css"
import { useParams, Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState([]);
  const {productId} = useParams();


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
          <div className="thecard" key={product.id}>
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
            <h1>{product.category}</h1>
            <h1>{product.price}</h1>
            <p>{product.description}</p>
            <Link to="/"><button className="back" >back</button></Link>

          </div>

      
    </div>
  );
}

export default ProductDetailsPage;
