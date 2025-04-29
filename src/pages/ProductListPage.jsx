import '../pages/Products.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((e) => {
        console.log('error', e);
      });
  }, []);


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {products.map((productsObj) => {
        return (
          <div className='ProductListPage' key={productsObj.id}>
            <img src={productsObj.image} alt={productsObj.title} />
            <h3> <strong>{productsObj.title}</strong></h3>
            <p>{productsObj.category}</p>
            <p>${productsObj.price}</p>
            <p>{productsObj.description}</p>
            <Link to={`/product/details/${productsObj.id}`}>
            View Details
          </Link>
          </div>
        );
      })}
    </div>
  );
}
export default ProductListPage;
