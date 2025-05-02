import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).\

  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log('Error getting character details from the API...');
        console.log(e);
      });
  }, [productId]);

  product ? console.table(product) : null;

  const displayProduct = (product) => {
    return (
      <div className="card card__detailPage">
        <img src={product.image} alt="" />
        <p>{product.category}</p>
        <h3>
          {' '}
          <strong>{product.title}</strong>
        </h3>
        <div className="card__detailPage__descriptionAndImage">
          <p className="card__homepage__description">{product.description}</p>
          <p>${product.price}</p>
        </div>

        <Link to="/">
          {' '}
          <button className="back-button"> BACK</button>
        </Link>
      </div>
    );
  };

  return (
    <div className="ProductDetailsPage">
      {product === null ? <h2>Loading ...</h2> : displayProduct(product)}
    </div>
  );
}

export default ProductDetailsPage;
