import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId }= useParams();
  const [product, setProduct] = useState({});
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [productId]);



  return (
    <div className="ProductDetailsPage">
      <img alt={product.title} src={product.image} />
      <h3 >{product.title}</h3>
      <h3>{product.price}€</h3>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
