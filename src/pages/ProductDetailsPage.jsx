import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetailsPage.css'
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  // const productProfile = product.find((eachProduct) => eachProduct.id === productId);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((productData) => {
        console.log(productData);
        setProduct(productData);
      })
      .catch(() => console.error("Couldn't retrieve the data"))
  }, [productId])


  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img src={product.image} alt={product.name} />
      <p id="category">{product.category}</p>
      <h1>{product.title}</h1>
      <div className="info">
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
