import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams()


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res=>res.json())
      .then(json=>setProduct(json))
  },[]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.



  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      <div className="hero-img-cont">
        <img src={product.image}/>
      </div>
      <div className="category-cont">{product.category}</div>
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">{`$${product.price}`}</div>
      <hr/>
      <Link to={'/'}>
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
