import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage" key={product.id}>
      {
        <div>
          <img src={product.image} />
          <p className="tag">{product.category}</p>
          <div className="info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
          <p>${product.price}</p>
          <button>back</button>
        </div>
      }
    </div>
  );
}

export default ProductDetailsPage;
