import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams();


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((result) => {
      setProduct(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  console.log(product);

  if (!product) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="ProductDetailsPage">
      <div className="product-detail" key={product.id}>
        <img src={product.image} alt={product.title + " image"} />
        <p className="category-badge">{product.category}</p>
        <h1><strong>{product.title}</strong></h1>
        <div className="product-desc-price">
          <p>{product.description}</p>
          <h3 className="price-badge"><strong>$ {product.price}</strong></h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
