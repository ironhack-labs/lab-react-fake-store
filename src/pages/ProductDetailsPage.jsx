import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams()

  //console.log(productId)

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) => {
      setProduct(response.data)
    })

      .catch((error) => {
        console.log(error);
      })

  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  return (
    <div className="ProductDetailsPage">
      {product && (
        <div key={product.id} className="detailBox">
          <span><img src={product.image} className="detailImg"></img></span>

          <span>{product.title}</span>
          <span>{product.category}</span>
          <span>{product.price}€</span>
          <span className="detailDesc">{product.description}</span>

        </div>)
      }
    </div>
  )
}

export default ProductDetailsPage;
