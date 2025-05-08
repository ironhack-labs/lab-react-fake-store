import { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';
import ProductDetailsPage from "./ProductDetailsPage";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.log('Error getting data from the API...', error);
      });
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="productListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`}
          key={product.id}>
          <div className="productDetails">
            
            <img src={product.image} alt={product.title} width="100" />
            <p className="productTitle">{product.title} </p>
            <p className="productPrice">$ {product.price} </p>
            <p className="productCategory">{product.category}</p>
            <p className="productDescription">{product.description}</p>

          </div>
        </Link>
      ))
      }
    </div >
  );
}

export default ProductListPage;
