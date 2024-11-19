import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const productId = useParams()['productId'];
  console.log(productId)

  // To fetch the product details, set up an effect with the `useEffect` hook:
  // fetch(`https://fakestoreapi.com/products/${productId}`)
  //   .then(response => {
  //     return response.json()
  // })
  //   .then(data => {
  //     return setProduct(data)
  // })
  //   .catch(error => {
  //     console.log(error)
  // });
  
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(error => console.log(error));
  }, [productId])

  console.log(product)
  return (
    <div className="ProductDetailsPage">
    <img src={product.image} alt="product image" />
    <h2>{product.title}</h2>
    <div className="category">{product.category}</div>
    <div className="informations">
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
    </div>
    <hr />
    <div className="center">
    <Link to='/'>
      <button>Back</button>
    </Link>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
