import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const { productId } = useParams();

  const [product, setProduct] = useState([]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [productId])


  return (
    <div key={product.id} className="ProductDetailsPage">
      <div className="productDetailsList">
        <img src={product.image} alt={product.name} />
        <p>{product.category}</p>
        <p>{product.title}</p>
        <div>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
