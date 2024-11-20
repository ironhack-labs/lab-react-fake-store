import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// The state variable `products` is currently an empty array [], 
// but you should use it to store the response from the Fake Store API (the list of products).
// To fetch the list of products, set up an effect with the `useEffect` hook:
function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(data => {
        //console.log('load data', data);
        setProducts(data);
      })
      .catch(err => console.log(err));
  }, []);

  return products.map((product) => {
    return (
      <Link key={product.id} to={'product/details/' + product.id}>
        <div className="ProductListPage">
          <img src={product.image} alt='a product' />
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p><b>{product.price} Cash</b></p>
          <p className='description'>{product.description}</p>
        </div>
      </Link>
    );
  });
}

export default ProductListPage;
