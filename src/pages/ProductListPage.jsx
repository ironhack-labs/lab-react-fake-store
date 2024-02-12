import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const baseUrl = 'https://fakestoreapi.com';

  useEffect(() => {
    axios
      .get(`${baseUrl}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log('Error getting characters from the API...');
        console.log(e);
      });
  }, []);

  const displayProduct = (product) => {
    return (
      <Link to={`./product/details/${product.id}`}>
        <div className="card card__homepage">
          <img src={product.image} alt="" />
          <h3>
            {' '}
            <strong>{product.title}</strong>
          </h3>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p className="card__homepage__description">{product.description}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="ProductListPage">
      {products === null ? (
        <h2>Loading ...</h2>
      ) : (
        products.map((el) => displayProduct(el))
      )}
    </div>
  );
}

export default ProductListPage;
