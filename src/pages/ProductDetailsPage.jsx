import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/ProductDetailsPage.css';

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <p className="category">{product.category}</p>
      <h2>{product.title}</h2>
      <div className="para">
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
